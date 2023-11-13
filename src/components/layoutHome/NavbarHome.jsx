import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import CategoryService from "../../homeService/categoryService"


const NavbarHome = () => {

    const [gender, setGender] = useState([]);
   

    useEffect(() => {
        async function getCategory() {
            let reponse = await CategoryService.getCategory();
            setGender(reponse.data)
        }
        getCategory()
    }, [])

    return (

        <div
            id="sticky-header-with-topbar"
            className="mainmenu__area sticky__header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                        <div className="logo">
                            <a href="/home">
                                <img src="images/logo/uniqlo.png" alt="logo" />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6" >
                        <nav className="mainmenu__nav hidden-xs hidden-sm">
                            <ul className="main__menu" >
                                <li className="drop" >
                                    <a href="/home">Trang Chủ</a>
                                </li>
                                {/* Nam */}
                                {
                                    gender.map((male, index) => (
                                        <li className="drop" key={index}>
                                            <a href="about.html">{male.name}</a>
                                            <ul className="dropdown mega_dropdown">
                                                {/* Start Single Mega MEnu */}
                                                {male.categoryChildren.map((category, categoryIndex) => (
                                                    <li key={categoryIndex}>
                                                        <a className="mega__title" >
                                                            {category.name}
                                                        </a>
                                                        <ul className="mega__item">

                                                            {category.categoryChildren.map((item) =>
                                                                <li key={index + item.id}>
                                                                    <a href="shop.html" >{item.name}</a>
                                                                </li>)}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>

                                    ))
                                }

                                {/* sidebar */}
                                <li>
                                    <a href="/sidebar" style={{ textDecoration: "none" }}>Shop Sidebar</a>
                                </li>

                                <li>
                                    <a href="contact.html" style={{ textDecoration: "none" }}>Liên Hệ</a>
                                </li>
                            </ul>
                        </nav>

                    </div>



                    {/* End MAinmenu Ares */}
                    <div className="col-md-2 col-sm-4 col-xs-3">
                        <ul className="menu-extra">

                            <li style={{ paddingRight: "0px" }}>
                                <span className="ti-user col-md-2" data-toggle="modal"
                                    data-target="#exampleLogin" />
                            </li>

                            <NavLink to={`/cart`}>
                                <li className="cart__menu">
                                    <span className="ti-shopping-cart col-md-2" />
                                </li>
                            </NavLink>

                            <li className="toggle__menu hidden-xs hidden-sm">
                                <span className="ti-menu" />
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mobile-menu-area" />
            </div>


        </div>
    )
}
export default NavbarHome