import { NavLink } from "react-router-dom";

const UserInfomation = () => {
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
            <div className="0 mt-5">
                <div className="row">
                    <div className="product__menu mt-5 ms-5">
                        <button data-filter="*" className="is-checked">
                            All
                        </button>
                        <button data-filter=".cat--1">Chờ Xác Nhận</button>
                        <button data-filter=".cat--2">Xác Nhận</button>
                        <button data-filter=".cat--3">Chờ Giao Hàng</button>
                        <button data-filter=".cat--4">Thành Công</button>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                        <div className="htc__shop__left__sidebar">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                            <div className="htc__shop__cat">
                                <h4 className="section-title-4">KÝ GỞI</h4>
                                <ul className="sidebar__list">
                                    <li>
                                        <a href="#"> All <span>3</span></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Chờ Xác Nhận <span>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Xác Nhận <span>4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Chờ Giao Hàng <span>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Thành Công <span>6</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserInfomation;