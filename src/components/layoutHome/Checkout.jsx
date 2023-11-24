/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import CartTotal from "./CartTotal"
import LocationRegionService from "../../service/homeService/locationRegionService";

const Checkout = ({ cartDetails }) => {
    const totalPrice = cartDetails.total;
    const [total, setTotal] = useState(totalPrice);
    const [shippingFee, setShipping] = useState(0);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [address, setAddress] = useState("");
    const [locationRegion, setLocationRegion] = useState({
        provinceId: 0,
        provinceName: "",
        districtId: 0,
        districtName: "",
        wardId: 0,
        wardName: ""
    });

    useEffect(() => {
        async function getAllProvinces() {
            let response = await LocationRegionService.getAllProvinces();
            setProvinces(response.data)
        }
        getAllProvinces();
    }, [])

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
            setTotal(totalPrice + 30000)
        }
        else {
            setShipping(10000);
            setTotal(totalPrice + 10000);
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
            address
        })
    }

    return (
        <div >
            <div className="body__overlay" />
            <section className="our-checkout-area bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-sx-12 col-lg-12">
                            <div className="ckeckout-left-sidebar">
                                {/* Start Checkbox Area */}
                                <div className="checkout-form">
                                    <h2 className="section-title-3 mb-5 ms-3">Địa Chỉ Nhận Hàng</h2>
                                    <form >
                                        <div className="d-flex">
                                            <div className="col-md-8 col-lg-8">
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-5 ">
                                                        <input type="text" onInput={e => setName(e.target.value)} placeholder="Tên Người Nhận*" className="form-control me-5" />
                                                        <input type="text" onInput={e => setPhone(e.target.value)} placeholder="Số Điện Thoại*" className="form-control " />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-5">
                                                        <select className="form-control me-5" onChange={onchangeProvince}>
                                                            <option>Tỉnh*</option>
                                                            {
                                                                provinces.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <select className="form-control" onChange={onChangDistrict}>
                                                            <option>Thành Phố*</option>
                                                            {
                                                                districts.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group d-flex mb-5 ">
                                                        <select className="form-control me-5" onChange={onChangeWard}>
                                                            <option>Quận Huyện*</option>
                                                            {
                                                                wards.map((item, index) => (
                                                                    <option value={item.id} key={index} >{item.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        <input type="text" placeholder="Địa Chỉ*"
                                                            className="form-control"
                                                            onInput={e => setAddress(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-lg-4">
                                                <div>
                                                    <CartTotal total={total} setTotal={setTotal}
                                                        totalPrice={totalPrice} shippingFee={shippingFee}
                                                        name={name} phone={phone}
                                                        locationRegion={locationRegion} />
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
export default Checkout