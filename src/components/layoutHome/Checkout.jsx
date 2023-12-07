/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
// import CartTotal from "./CartTotal"
import LocationRegionService from "../../service/homeService/locationRegionService";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import CartService from "../../service/homeService/cartService";
import { ToastSuccess } from "../../toastify/Toast";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ cartDetails, total }) => {
    const totalPrice = cartDetails.total || total;
    const [totals, setTotals] = useState(totalPrice);
    const [shippingFee, setShipping] = useState(0);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const backHome = useNavigate();

    const checkOutSchema = yup.object({
        name: yup.string().required("Tên Người Nhận Không Được Để Trống")
            .min(5, "Tên Người Nhận Phải Từ 5 Đến 30 Kí Tự").max(30, "Tên Người Nhận Phải Từ 5 Đến 30 Kí Tự"),
        phone: yup.string().matches(/^(0|\+84)\d{9}$/, 'Số điện thoại không hợp lệ'),
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
        })
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
        })
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

        })
    }

    const checkOut = async (value) => {
        const data = {
            ...value,
            shippingFee,
            totalPrice,
            locationRegion
        }
        console.log(data);
        if (localStorage.getItem("jwt")) {
            await CartService.checkOut(data);
            ToastSuccess('Đặt Hàng Thành Công');
            setTimeout(() => {
                backHome("/home")
            }, 3000)
        } else {
            await CartService.checkOutNotLogin(data);
            localStorage.removeItem("productDetail");
            ToastSuccess('Đặt Hàng Thành Công');
            setTimeout(() => {
                backHome("/home")
            }, 3000)
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
                                                    <div className="col-lg-12 form-group d-flex mb-5 ">
                                                        <div className="col-lg-6 me-3 ">
                                                            <input type="text" placeholder="Tên Người Nhận*"
                                                                className={`${errors?.name?.message ? "form-control me-5 is-invalid" : "form-control me-5"}`}
                                                                {...register('name')} />
                                                            <span className="invalid-feedback">{errors?.name?.message}</span>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <input type="text" placeholder="Số Điện Thoại*"
                                                                className={`${errors?.phone?.message ? "form-control is-invalid " : "form-control "}`}
                                                                {...register('phone')} />
                                                            <span className="invalid-feedback">{errors?.phone?.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-5">
                                                        <div className="col-lg-6 me-3">
                                                            <select className="form-control me-5"
                                                                {...register('province')}
                                                                onChange={onchangeProvince}>
                                                                <option>Tỉnh*</option>
                                                                {provinces.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <select className="form-control"
                                                                {...register('district')}
                                                                onChange={onChangDistrict}>
                                                                <option>Thành Phố*</option>
                                                                {districts.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-5 ">
                                                        <div className="col-lg-6 me-3">
                                                            <select className="form-control me-5"
                                                                {...register('ward')}
                                                                onChange={onChangeWard}>
                                                                <option>Quận Huyện*</option>
                                                                {wards.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <input type="text" placeholder="Địa Chỉ*"
                                                                className={`${errors?.address?.message ? "form-control is-invalid" : "form-control"}`}
                                                                {...register('address')} />
                                                            <span className="invalid-feedback">{errors?.address?.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-lg-4">
                                                <div className="cart_totals">
                                                    <h2>TỔNG GIỎ HÀNG</h2>
                                                    <table style={{ display: "block", width: "180px" }}>
                                                        <tbody>
                                                            <tr className="cart-subtotal">
                                                                <th>Tổng Phụ</th>
                                                                <td>
                                                                    <span className="amount">{totalPrice}</span>
                                                                </td>
                                                            </tr>
                                                            <tr className="shipping">
                                                                <th>Phí Vận Chuyển</th>
                                                                <td>
                                                                    <span className="amount">{shippingFee}</span>
                                                                </td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <th>Tổng Tiền</th>
                                                                <td>
                                                                    <strong>
                                                                        <span className="amount">{totals}</span>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <div className="wc-proceed-to-checkout d-flex justify-content-end">
                                                            <button className="btn btn-danger" >Xác Nhận Đặt Hàng</button>
                                                        </div>
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