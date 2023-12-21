/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
// import CartTotal from "./CartTotal"
import LocationRegionService from "../../service/homeService/locationRegionService";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import CartService from "../../service/homeService/cartService";
import { ToastSuccess, ToastWarning } from "../../toastify/Toast";
import formatPrice from "./formatPrice/FormatPrice";
import "../layoutHome/cssHome/cssHome.css"
import { UseProduct } from "./UseContext";

const CheckOut = ({ cartDetails, total, userInfo }) => {
    const { backHome } = useContext(UseProduct);
    const totalPrice = cartDetails.total || total;
    const [totals, setTotals] = useState(totalPrice);
    const [shippingFee, setShipping] = useState(0);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const formatShippingFee = formatPrice(shippingFee);
    const formatTotals = formatPrice(totals);
    const formatTotalPrice = formatPrice(totalPrice);
    const [provinceSelected, setProvinceSelected] = useState(true);
    const [districtSelected, setDistrictSelected] = useState(true);
    const [wardSelected, setWardSelected] = useState(true);

    const checkOutSchema = yup.object({
        name: yup.string().required("Tên Người Nhận Không Được Để Trống")
            .min(5, "Tên Người Nhận Phải Từ 5 Đến 30 Kí Tự").max(30, "Tên Người Nhận Phải Từ 5 Đến 30 Kí Tự"),
        phone: yup.string().matches(/^(0|\+84)\d{9}$/, 'Số Điện Thoại Không Hợp Lệ'),
        address: yup.string().required("Vui Lòng Nhập Địa Chỉ")
            .max(30, "Địa Chỉ Phải Ít Hơn 40 Kí Tự "),
        province: yup.string().required("Vui Lòng Chọn Thành Phố"),
        district: yup.string().required("Vui Lòng Chọn Quận/Huyện"),
        ward: yup.string().required("Vui Lòng Chọn Phường/Xã"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(checkOutSchema)
    });

    const [locationRegion, setLocationRegion] = useState({
        provinceId: 0,
        provinceName: "",
        districtId: 0,
        districtName: "",
        wardId: 0,
        wardName: "",
    });

    useEffect(() => {
        async function getAllProvinces() {
            let response = await LocationRegionService.getAllProvinces();
            setProvinces(response.data)
        }
        getAllProvinces();
    }, [])

    useEffect(() => {
        setTotals(totalPrice)
    }, [totalPrice])

    const getALlDistricts = async (provinceId) => {
        let response = await LocationRegionService.getAllDistricts(provinceId);
        setDistricts(response.data)
    }
    const getAllWards = async (districtId) => {
        let response = await LocationRegionService.getAllWards(districtId);
        setWards(response.data);
    }
    const onchangeProvince = (e) => {
        const provinceId = e.target.value;
        const index = e.nativeEvent.target.selectedIndex;
        const provinceName = e.nativeEvent.target[index].text;
        getALlDistricts(provinceId);
        setLocationRegion({
            ...locationRegion,
            provinceId,
            provinceName
        });
        setProvinceSelected(false);
    }
    const onChangDistrict = (e) => {
        const districtId = e.target.value;
        const index = e.nativeEvent.target.selectedIndex;
        const districtName = e.nativeEvent.target[index].text;
        getAllWards(districtId);
        setLocationRegion({
            ...locationRegion,
            districtId,
            districtName
        });
        setDistrictSelected(false);
        if (districtId != 346) {
            setShipping(30000)
            setTotals(totalPrice + 30000)
        }
        else {
            setShipping(10000);
            setTotals(totalPrice + 10000);
        }
    }
    const onChangeWard = (e) => {
        const wardId = e.target.value;
        const index = e.nativeEvent.target.selectedIndex;
        const wardName = e.nativeEvent.target[index].text;
        setLocationRegion({
            ...locationRegion,
            wardId,
            wardName,

        });
        setWardSelected(false);
    }
    const checkOut = async (value) => {
        const data = {
            ...value,
            shippingFee,
            totalPrice,
            locationRegion: {
                ...locationRegion,
                address: value.address
            }
        }
        console.log(data);
        if (localStorage.getItem("jwt")) {
            if (cartDetails.length > 0) {
                await CartService.checkOut(data);
                ToastSuccess('Đặt Hàng Thành Công');
                backHome("/home");
            }
            else {
                ToastWarning("Vui Lòng Chọn Sản Phẩm");
            }
        } else {
            if (localStorage.getItem("productDetail")) {
                await CartService.checkOutNotLogin(data);
                localStorage.removeItem("productDetail");
                ToastSuccess('Đặt Hàng Thành Công');
                backHome("/home");
            }
            else {
                ToastWarning("Vui Lòng Chọn Sản Phẩm");
            }
        }
    }

    return (
        <div >
            <div className="body__overlay" />
            <section className="our-checkout-area bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-sx-12 col-lg-12">
                            <div className="ckeckout-left-sidebar">
                                <div className="checkout-form">
                                    <h2 className="section-title-3 mb-5 ms-3">Địa Chỉ Nhận Hàng</h2>
                                    <form onSubmit={handleSubmit(checkOut)}>
                                        <div className="d-flex">
                                            <div className="col-md-8 col-lg-8">
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-3 ">
                                                        <div className="col-lg-6 me-3 ">
                                                            <label>Tên Người Nhận</label>
                                                            <input type="text" placeholder="Tên Người Nhận*" defaultValue={userInfo.username}
                                                                className={`form-control me-5 ${errors?.name?.message ? " is-invalid" : ""}`}
                                                                {...register('name')} />
                                                            <span className="invalid-feedback">{errors?.name?.message}</span>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Số Điện Thoại</label>
                                                            <input type="text" placeholder="Số Điện Thoại*" defaultValue={userInfo.phone}
                                                                className={`form-control ${errors?.phone?.message ? " is-invalid " : ""}`}
                                                                {...register('phone')} />
                                                            <span className="invalid-feedback">{errors?.phone?.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-3">
                                                        <div className="col-lg-6 me-3">
                                                            <label>Tỉnh / Thành Phố</label>
                                                            <select
                                                                className={`form-control me-5 ${provinceSelected && errors?.province?.message ? " is-invalid" : ""}`}
                                                                {...register('province')}
                                                                onChange={onchangeProvince}>
                                                                <option value="">Tỉnh / Thành Phố*</option>
                                                                {provinces.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))}
                                                            </select>
                                                            <span className="invalid-feedback">{errors?.province?.message}</span>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Quận Huyện</label>
                                                            <select className={`form-control ${districtSelected && errors?.district?.message ? " is-invalid" : ""}`}
                                                                {...register('district')}
                                                                onChange={onChangDistrict}>
                                                                <option value="">Quận Huyện*</option>
                                                                {districts.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))}
                                                            </select>
                                                            <span className="invalid-feedback">{errors?.district?.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-5 ">
                                                        <div className="col-lg-6 me-3">
                                                            <label>Phường Xã</label>
                                                            <select className={`form-control me-5 ${wardSelected && errors?.ward?.message ? " is-invalid" : ""}`}
                                                                {...register('ward')}
                                                                onChange={onChangeWard}>
                                                                <option value="">Phường Xã*</option>
                                                                {wards.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))}
                                                            </select>
                                                            <span className="invalid-feedback">{errors?.ward?.message}</span>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Địa Chỉ</label>
                                                            <input type="text" placeholder="Địa Chỉ*"
                                                                className={`form-control ${errors?.address?.message ? "is-invalid" : ""}`}
                                                                {...register('address')} />
                                                            <span className="invalid-feedback">{errors?.address?.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-lg-4">
                                                <div className="cart_totals">
                                                    <h2>TỔNG GIỎ HÀNG</h2>
                                                    <table >
                                                        <tbody>
                                                            <tr className="cart-subtotal">
                                                                <th>Tổng Phụ</th>
                                                                <td>
                                                                    <span className="amount">{formatTotalPrice}</span>
                                                                </td>
                                                            </tr>
                                                            <tr className="shipping">
                                                                <th>Phí Vận Chuyển</th>
                                                                <td>
                                                                    <span className="amount">{formatShippingFee}</span>
                                                                </td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <th>Tổng Tiền</th>
                                                                <td>
                                                                    <strong>
                                                                        <span className="amount">{formatTotals}</span>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                        <caption className="checkOutButton mt-3" >
                                                            <button className="btn btn-danger">Xác Nhận Đặt Hàng</button>
                                                        </caption>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}
export default CheckOut