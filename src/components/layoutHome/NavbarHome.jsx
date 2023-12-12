import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import CategoryService from "../../service/homeService/categoryService"
import { useContext } from "react";
import { UseProduct } from "./UseContext";
import { ToastSuccess } from "../../toastify/Toast";
import "../layoutHome/cssHome/cssHome.css"

const NavbarHome = () => {
    const [categories, setCategories] = useState([]);
    const { logoutIcon, setLogoutIcon, setTimeout, setCategoryId } = useContext(UseProduct);

    useEffect(() => {
        async function getCategory() {
            let reponse = await CategoryService.getCategory();
            setCategories(reponse.data)
        }
        getCategory();
    }, []);

    const logout = () => {
        localStorage.removeItem("jwt");
        ToastSuccess("Đăng Xuất Thành Công");
        setLogoutIcon((prev) => !prev)
        setTimeout();
    }

    const handleCategoryId = (id) => {
        setCategoryId(id);
    }
    const handleGoHome = () => {
        setCategoryId("");
    }

    return (
        <>
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div style={{ margin: "0px 70px" }}>
                    <div className="row">
                        <div className="col-md-2 col-lg-3 col-sm-3 col-xs-3">
                            <div className="logo">
                                <NavLink to={"/home"}>
                                    <img src="images/logo/uniqlo.png" alt="logo" />
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-6 col-sm-6 col-xs-6" >
                            <nav className="mainmenu__nav hidden-xs hidden-sm">
                                <ul className="main__menu" >
                                    <li className="drop" >
                                        <NavLink to={"/home"} onClick={handleGoHome}>Trang Chủ</NavLink>
                                    </li>
                                    {
                                        categories.map((male, index) => (
                                            <li className="drop" key={index}>
                                                <a href="">{male.name}</a>
                                                <ul className="dropdown mega_dropdown">
                                                    {
                                                        male.categoryChildren.map((category, categoryIndex) => (
                                                            <li key={categoryIndex}>
                                                                <a className="mega__title" >{category.name}</a>
                                                                <ul className="mega__item">
                                                                    {
                                                                        category.categoryChildren.map((item) =>
                                                                            <li key={index + item.id}>
                                                                                <a type="button" onClick={() => handleCategoryId(item.id)} >{item.name}</a>
                                                                            </li>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    }

                                    <li>
                                        <NavLink to={"/sidebar"} style={{ textDecoration: "none" }}>Shop Sidebar</NavLink>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-lg-3 col-sm-4 col-xs-3">
                            <ul className="menu-extra mt-4  ">
                                {
                                    logoutIcon ? (<>
                                        <li onClick={logout}><a type="button" className="drop text-white login-text">Đăng Xuất</a></li>
                                        <NavLink to={'/userInfomation'}>
                                            <li><span>
                                                <i className="fa-regular fa-user"></i>
                                            </span></li>
                                        </NavLink>
                                    </>)
                                        : <li><a type="button" className="drop text-white login-text"
                                            data-toggle="modal" data-target="#exampleLogin">Đăng Nhập</a></li>
                                }
                                <li>
                                    <NavLink to={`/cart`}>
                                        <span className="ti-shopping-cart col-md-2 me-1" />
                                    </NavLink>
                                </li>
                                <span className="cart__count text-white"></span>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu-area" />
                </div >
            </div >
        </>
    )
}
export default NavbarHome