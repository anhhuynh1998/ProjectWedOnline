import { NavLink } from "react-router-dom";
import "../../layoutHome/cssHome/cssHome.css"
import { useEffect } from "react";
import { useState } from "react";
import StatusService from "../../../service/homeService/statusService";

const UserInfomation = () => {
    const [status, setStatus] = useState([]);

    useEffect(() => {
        async function listStatus() {
            let respo = await StatusService.findAll();
            console.log(respo.data);
            setStatus(respo.data);
        }
        listStatus();
    }, [])

    return (
        <div>
            <div className="body__overlay" />
            <div
                className="ht__bradcaump__area"
                style={{
                    background:
                        "rgba(0, 0, 0, 0) url(images/bg/aoquan.jpeg) no-repeat scroll center center / cover"
                }}
            >
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title text-white" >User</h2>
                                    <nav className="bradcaump-inner" >
                                        <NavLink className="breadcrumb-item text-white" to={'/home'} >
                                            Home
                                        </NavLink>
                                        <span className="brd-separetor text-white" >/</span>
                                        <span className="breadcrumb-item active text-white" >UserInfomation</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-5 userinfomation">
                <div className="row ">
                    <div className="product__menu mt-5 ms-5 mb-5">
                        <button data-filter="*">
                            All
                        </button>
                        {
                            status.map((item, index) => (
                                <button key={index} data-filter={item.id}>{item.name}</button>
                            ))
                        }

                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 ">
                        <div className="htc__shop__left__sidebar me-2" style={{ width: "90%" }}>
                            <div className="card" >
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card content.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                            <div className="htc__shop__cat card ">
                                <h4 className="section-title-4 btn btn-primary">KÝ GỞI </h4>
                                <ul className="sidebar__list ">
                                    <li>
                                        <a> All <span className="me-4">3</span></a>
                                    </li>
                                    {
                                        status.map((item, index) => (
                                            <li key={index}>
                                                <a>{item.name}<span className="me-4">3</span></a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="htc__shop__cat card ">
                                <h4 className="section-title-4 btn btn-primary">Doanh Thu</h4>
                                <ul className="sidebar__list ">
                                    <li>
                                        <a> Theo Tháng <span className="me-4">300000 VND</span></a>
                                    </li>
                                    <li>
                                        <a> Theo Năm <span className="me-4">300000 VND</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12">
                        <div className="card" style={{ width: "100%" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserInfomation;