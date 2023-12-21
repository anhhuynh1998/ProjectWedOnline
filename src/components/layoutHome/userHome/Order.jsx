// import { NavLink } from "react-router-dom";
import "../../layoutHome/cssHome/cssHome.css"
import { useEffect, useState } from "react";
import StatusService from "../../../service/homeService/statusService";
import Background from "./background";
import UserInfoService from "../../../service/homeService/userInfoService";
import formatPrice from "../formatPrice/FormatPrice";

const Order = () => {
    const [status, setStatus] = useState([]);
    const [orders, setOrders] = useState([]);
    const [filterByStatusId, setfilterByStatusId] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        async function listStatus() {
            let respo = await StatusService.findAll();
            setStatus(respo.data);
            console.log(status);
            let respon = await UserInfoService.showCartByUser();
            setOrders(respon.data);
            setfilterByStatusId(respon.data);
        }
        listStatus();
    }, [])
    const changeStatus = (id) => {
        setSelectedId(id);
        setOrders(filterByStatusId?.filter(e => e.statusId === id))
    }
    const changerAll = () => {
        setOrders(filterByStatusId);
    }
    console.log(orders.statusId);

    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <div className="body__overlay" />
            <Background message={"Thông Tin Đơn Hàng"}
                img={"rgba(0, 0, 0, 0) url(http://localhost:5173/images/bg/userinfo.jpeg) no-repeat scroll center center / cover"} />
            <div className=" mt-5 userinfomation animate__animated animate__bounceInLeft">
                <div className="container ">
                    <div className="product__menu">
                        <button data-filter="*" onClick={changerAll}>
                            All
                        </button>
                        {
                            status.map((item, index) => (
                                <button key={index} data-filter={item.id}
                                    onClick={() => changeStatus(item.id)} style={{ color: item.id === selectedId ? 'red' : '' }} > {item.name}</button>
                            ))
                        }
                    </div>
                    {
                        orders?.map((item, index) => {
                            const formattedTotal = formatPrice(item.totalCart);
                            const formattedShipping = formatPrice(item.shippingFee);
                            const formattedPrice = formatPrice(item.cartDetailList.total);
                            const DATA = {
                                "2": "Đơn Hàng Đang Chờ Xác Nhận",
                                "3": "Đơn Hàng Đã Được Xác Nhận",
                                "4": "Đơn Hàng Đang Được Giao Đến Bạn",
                                "5": "Đơn Hàng Đã Được Giao Thành Công"
                            }
                            return (
                                <div className="container" key={index}>
                                    <div className=" card mb-3 mt-5" style={{ maxWidth: "100%" }}>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text mt-4 ms-3 ">
                                                <small className="text-muted">Ngày Đặt Hàng: {item.orderDate}</small>
                                            </p>
                                            <p className="text-success  mt-3 mb-3 me-3"  >
                                                <i className="fa-solid fa-truck me-3"></i>
                                                {DATA[item.statusId + ""] || ''}</p>
                                        </div>
                                        {
                                            item.cartDetailList?.map((item, index) => {
                                                return (
                                                    <div className="" key={index}>
                                                        <div className="row justify-content-between">
                                                            <div className="col-md-1 mt-1">
                                                                <img src={item.product?.imageUrl} style={{ height: "80px", width: "80px" }} />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div>
                                                                    <p className="text-dark">{item.product?.description}</p>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <small className="text-muted">X1</small>
                                                                    <div className="text-muted">Size : {item.product?.size}</div>
                                                                </div>
                                                            </div >
                                                            <div className="col-md-1 ms-3 align-self-center ">
                                                                <p className="text-danger justify-content-end  me-3 ">{formattedPrice}</p>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-1 mb-1" />
                                                    </div>
                                                )
                                            })
                                        }

                                        <div>
                                            <h5 className="text-danger justify-content-end  me-3 mt-3">Phí Ship  : {formattedShipping}</h5>
                                            <h5 className="text-danger justify-content-end  me-3 mt-3">
                                                Tổng Tiền  : {formattedTotal} </h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
};

export default Order;