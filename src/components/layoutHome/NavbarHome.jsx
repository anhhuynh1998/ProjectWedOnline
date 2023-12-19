import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import CategoryService from "../../service/homeService/categoryService"
import { useContext } from "react";
import { UseProduct } from "./UseContext";
import { ToastSuccess } from "../../toastify/Toast";
import "../layoutHome/cssHome/cssHome.css"
import { removeFalsyFields } from "./ShopSideBar/SortPrice";

const NavbarHome = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const { logoutIcon, setLogoutIcon, backHome, setCategoryId,
        count, setPage, setProducts, filter, setFilter } = useContext(UseProduct);

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
        backHome("/home");
    }

    const handleCategoryId = (cate) => {
        setPage(0);
        setCategoryId(cate.id);
        const cateUrl = {
            ...filter,
            categoryId: cate.id
        }
        setFilter(cateUrl);
        navigate(`/sidebar?${removeFalsyFields(cateUrl)}`)

    }
    const handleGoHome = () => {
        setCategoryId("");
    }
    const handleSideBar = () => {
        setPage(0);
        setCategoryId("");
        const cateUrl = {
            ...filter,
            categoryId: ""
        }
        setFilter(cateUrl);
        navigate(`/sidebar?${removeFalsyFields(cateUrl)}`)
    }

    return (
        <>
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div style={{ margin: "0px 70px" }}>
                    <div className="row">
                        <div className="col-md-2 col-lg-3 col-sm-3 col-xs-3">
                            <div className="logo">
                                <NavLink to={"/home"}>
                                    <img src="http://localhost:5173/images/logo/uniqlo.png" alt="logo" />
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
                                                <a type="button" className="text-white">{male.name}</a>
                                                <ul className="dropdown mega_dropdown">
                                                    {
                                                        male.categoryChildren.map((category, categoryIndex) => (
                                                            <li key={categoryIndex}>
                                                                <a className="mega__title" >{category.name}</a>
                                                                <ul className="mega__item">
                                                                    {
                                                                        category.categoryChildren.map((categoryChildren) =>
                                                                            <li key={index + categoryChildren.id}>
                                                                                <a
                                                                                    type="button" onClick={() => handleCategoryId(categoryChildren)} >{categoryChildren.name}</a>
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
                                        <NavLink to={`/sidebar`} onClick={handleSideBar} style={{ textDecoration: "none" }}
                                        >Mua Sắm</NavLink>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-lg-3 col-sm-4 col-xs-3">
                            <ul className="menu-extra mt-4  ">
                                {
                                    logoutIcon ? (<>
                                        <li onClick={logout}><a type="button" className="drop text-white login-text">Đăng Xuất</a></li>
                                        <li style={{ margin: "-1% -4%" }}>
                                            <ul className="main__menu">
                                                <li className="drop">
                                                    <span>
                                                        <i className="ti-user"></i>
                                                    </span>
                                                    <ul className="dropdown mt-3" style={{ marginLeft: "-380%", width: "195px" }}>
                                                        <li><NavLink to={'/userInfomation'} >Thông Tin Của Tôi</NavLink></li>
                                                        <li><NavLink to={'/orders'}>Thông Tin Đơn Hàng</NavLink></li>
                                                        <li><NavLink to={'/deposit'}>Thông Tin Ký Gởi</NavLink></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </>)
                                        : <li><a type="button" className="drop text-white login-text"
                                            data-toggle="modal" data-target="#exampleLogin">Đăng Nhập</a></li>
                                }
                                <li>
                                    <NavLink to={`/cart`}>
                                        <span className="ti-shopping-cart col-md-2 me-1" />
                                    </NavLink>
                                    <span className="cart__count text-white">{count}</span>
                                </li>
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