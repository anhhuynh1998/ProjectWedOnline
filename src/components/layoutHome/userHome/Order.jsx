// import { NavLink } from "react-router-dom";
import "../../layoutHome/cssHome/cssHome.css"
import { useContext, useEffect } from "react";
import { useState } from "react";
import StatusService from "../../../service/homeService/statusService";
import Background from "./background";
import { UseProduct } from "../UseContext";
import UserInfoService from "../../../service/homeService/userInfoService";

const Order = () => {
    const [status, setStatus] = useState([]);
    const { loginEmail } = useContext(UseProduct);
    const [orders, setOrders] = useState([])
    console.log(loginEmail);

    useEffect(() => {
        async function listStatus() {
            let respo = await StatusService.findAll();
            setStatus(respo.data);
            const data = { email: loginEmail }
            let respon = await UserInfoService.showCartByUser(data);
            console.log(respon);
            setOrders(respon.data);
        }
        listStatus();
    }, [])

    return (
        <div>
            <div className="body__overlay" />
            <Background message={"Thông Tin Đơn Hàng"}
                img={"rgba(0, 0, 0, 0) url(http://localhost:5173/images/bg/userinfo.jpeg) no-repeat scroll center center / cover"} />
            <div className=" mt-5 userinfomation">
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
                    <div className="container">
                        {
                            orders?.map((item) => (
                                <div className=" card mb-3 mt-5" style={{ maxWidth: "100%" }} key={item.id}>
                                    <div className="row g-0">
                                        <div className="col-md-2">
                                            <img src="" className="img-fluid rounded-start" alt="" />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h4 className="card-title">{item.cartDetailList[0].product.description}</h4>
                                                <p className="card-text text-dark">
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">Ngày Đặt Hàng: {item.orderDate}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;