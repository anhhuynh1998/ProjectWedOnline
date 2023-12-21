// import { NavLink } from "react-router-dom";
import "../../layoutHome/cssHome/cssHome.css"
import { useEffect, useState } from "react";
import StatusService from "../../../service/homeService/statusService";
import Background from "./background";
import UserInfoService from "../../../service/homeService/userInfoService";
import formatPrice from "../formatPrice/FormatPrice";

const Order = () => {
    const [status, setStatus] = useState([]);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function listStatus() {
            let respo = await StatusService.findAll();
            setStatus(respo.data);
            let respon = await UserInfoService.showCartByUser();
            console.log(respon);
            setOrders(respon.data);
        }
        listStatus();
    }, [])

    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <div className="body__overlay" />
            <Background message={"Thông Tin Đơn Hàng"}
                img={"rgba(0, 0, 0, 0) url(http://localhost:5173/images/bg/userinfo.jpeg) no-repeat scroll center center / cover"} />
            <div className=" mt-5 userinfomation animate__animated animate__bounceInLeft">
                <div className="container ">
                    <div className="product__menu">
                        <button data-filter="*">
                            All
                        </button>
                        {
                            status.map((item, index) => (
                                <button key={index} data-filter={item.id}>{item.name}</button>
                            ))
                        }
                    </div>
                    {
                        orders?.map((item) => {
                            const formattedTotal = formatPrice(item.totalCart);
                            const formattedShipping = formatPrice(item.shippingFee);
                            return (
                                <div className="container" key={item.id}>
                                    <div className=" card mb-3 mt-5" style={{ maxWidth: "100%" }}>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text mt-4 ms-3 ">
                                                <small className="text-muted">Ngày Đặt Hàng: {item.orderDate}</small>
                                            </p>
                                            <p className="text-success  mt-3 mb-3 me-3"  >
                                                <i className="fa-solid fa-truck me-3"></i>Đơn Hàng Đã Được Giao Thành Công</p>
                                        </div>

                                        {
                                            item.cartDetailList?.map((cartDetail) => {
                                                const formattedPrice = formatPrice(cartDetail?.product.price);
                                                return (
                                                    <div className="" key={cartDetail.id}>
                                                        <div className="row justify-content-between">
                                                            <div className="col-md-1 mt-1">
                                                                <img src={cartDetail.product.imageUrl} style={{ height: "80px", width: "80px" }} />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div>
                                                                    <p className="text-dark">{cartDetail.product.description}</p>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <small className="text-muted">X1</small>
                                                                    <div className="text-muted">Size : {cartDetail.product.size}</div>
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
        </div>
    );
};

export default Order;