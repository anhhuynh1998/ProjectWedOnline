import { NavLink } from "react-router-dom"

const Checkout = () => {

    return (
        <div className="wrapper fixed__footer">
            {/* Start Header Style */}
            <header id="header" className="htc-header">
                {/* Start Mainmenu Area */}
                <div
                    id="sticky-header-with-topbar"
                    className="mainmenu__area sticky__header"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="images/logo/uniqlo.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            {/* Start MAinmenu Ares */}
                            <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                                <nav className="mainmenu__nav hidden-xs hidden-sm">
                                    <ul className="main__menu" >
                                        <li className="drop" >
                                            <a href="/home" style={{color:"white"}}>Home</a>
                                        </li>
                                        {/* Nam */}
                                        <li className="drop">
                                            <a href="about.html"style={{color:"white"}} >Nam</a>
                                            <ul className="dropdown mega_dropdown">
                                                {/* Start Single Mega MEnu */}
                                                <li>
                                                    <a className="mega__title" href="shop.html">
                                                        Áo
                                                    </a>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <a href="shop.html">Tất Cả Áo</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-sidebar.html">Áo Sơ mi</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">Áo Thun</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Áo Khoác</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Áo Khoác</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li>
                                                    <a className="mega__title" href="shop.html">
                                                        Quần
                                                    </a>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <a href="#">Tất Cả Quần</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Quần Jean</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Quần Tây</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">Quần Short</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Quần Nỉ</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li>
                                                    <a className="mega__title" href="shop.html" >
                                                        Phụ Kiện
                                                    </a>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <a href="#">Mũ</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Túi</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                            </ul>
                                        </li>

                                        {/* Nữ */}
                                        <li className="drop">
                                            <a href="about.html" style={{color:"white"}}>Nữ</a>
                                            <ul className="dropdown mega_dropdown">
                                                {/* Start Single Mega MEnu */}
                                                <li>
                                                    <a className="mega__title" href="shop.html">
                                                        Áo
                                                    </a>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <a href="shop.html">Tất Cả Áo</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-sidebar.html">Áo Sơ mi</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">Áo Thun</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Áo Len</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Áo Hoodie</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Áo Lông Cừu</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li>
                                                    <a className="mega__title" href="shop.html">
                                                        Quần
                                                    </a>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <a href="#">Tất Cả Quần</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Quần Jean</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Quần Tây</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">Quần Ống Rộng</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Quần Nỉ</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Quần Legging</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="mega__title" href="shop.html">
                                                        Đầm & Chân Váy
                                                    </a>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <a href="#">Váy</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Đầm</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li>
                                                    <a className="mega__title" href="shop.html">
                                                        Phụ Kiện
                                                    </a>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <a href="#">Túi</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Mũ</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Kính</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Giày</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                            </ul>
                                        </li>

                                        {/* sidebar */}
                                        <li>
                                            <a href="shop-sidebar.html" style={{color:"white"}}> Shop Sidebar</a>
                                        </li>

                                        <li>
                                            <a href="contact.html" style={{color:"white"}}>contact</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                            {/* End MAinmenu Ares */}
                            <div className="col-md-2 col-sm-4 col-xs-3" >
                                <ul className="menu-extra" >
                                    <li className="search search__open hidden-xs" >
                                        <span className="ti-search" style={{color:"white"}}/>
                                    </li>
                                    {/* <nav className="navbar navbar-light bg-light">
                                                <div className="container-fluid">
                                                    <form className="d-flex">
                                                        <input className="form-control me-2" type="search" 
                                                        placeholder="Search" aria-label="Search"/>
                                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                                    </form>
                                                </div>
                                            </nav> */}
                                    <NavLink to={`/login`}>
                                        <li>
                                            <a href="login-register.html">
                                                <span className="ti-user col-md-2" style={{color:"white"}}/>
                                            </a>
                                        </li>
                                    </NavLink>
                                    <NavLink to={`/cart`}>
                                        <li className="cart__menu">
                                            <span className="ti-shopping-cart col-md-2" style={{color:"white"}}/>
                                        </li>
                                    </NavLink>

                                    <li className="toggle__menu hidden-xs hidden-sm">
                                        <span className="ti-menu" style={{color:"white"}}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-menu-area" />
                    </div>
                </div>
                {/* End Mainmenu Area */}
            </header>
            {/* End Header Style */}
            <div className="body__overlay" />
            {/* Start Offset Wrapper */}
            <div className="offset__wrapper">
                {/* Start Search Popap */}
                <div className="search__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search__inner">
                                    <form action="#" method="get">
                                        <input placeholder="Search here... " type="text" />
                                        <button type="submit" />
                                    </form>
                                    <div className="search__close__btn">
                                        <span className="search__close__btn_icon">
                                            <i className="zmdi zmdi-close" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Search Popap */}
                {/* Start Offset MEnu */}
                <div className="offsetmenu">
                    <div className="offsetmenu__inner">
                        <div className="offsetmenu__close__btn">
                            <a href="#">
                                <i className="zmdi zmdi-close" />
                            </a>
                        </div>
                        <div className="off__contact">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="images/logo/uniqlo.png" alt="logo" />
                                </a>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetu adipisicing elit sed do
                                eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        <ul className="sidebar__thumd">
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/1.jpg" alt="sidebar images" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/2.jpg" alt="sidebar images" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/3.jpg" alt="sidebar images" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/4.jpg" alt="sidebar images" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/5.jpg" alt="sidebar images" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/6.jpg" alt="sidebar images" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/7.jpg" alt="sidebar images" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/sidebar-img/8.jpg" alt="sidebar images" />
                                </a>
                            </li>
                        </ul>
                        <div className="offset__widget">
                            <div className="offset__single">
                                <h4 className="offset__title">Language</h4>
                                <ul>
                                    <li>
                                        <a href="#"> Engish </a>
                                    </li>
                                    <li>
                                        <a href="#"> French </a>
                                    </li>
                                    <li>
                                        <a href="#"> German </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="offset__single">
                                <h4 className="offset__title">Currencies</h4>
                                <ul>
                                    <li>
                                        <a href="#"> USD : Dollar </a>
                                    </li>
                                    <li>
                                        <a href="#"> EUR : Euro </a>
                                    </li>
                                    <li>
                                        <a href="#"> POU : Pound </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="offset__sosial__share">
                            <h4 className="offset__title">Follow Us On Social</h4>
                            <ul className="off__soaial__link">
                                <li>
                                    <a
                                        className="bg--twitter"
                                        href="https://twitter.com/devitemsllc"
                                        target="_blank"
                                        title="Twitter" rel="noreferrer"
                                    >
                                        <i className="zmdi zmdi-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="bg--instagram"
                                        href="https://www.instagram.com/devitems/"
                                        target="_blank"
                                        title="Instagram" rel="noreferrer"
                                    >
                                        <i className="zmdi zmdi-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="bg--facebook"
                                        href="https://www.facebook.com/devitems/?ref=bookmarks"
                                        target="_blank"
                                        title="Facebook" rel="noreferrer"
                                    >
                                        <i className="zmdi zmdi-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="bg--googleplus"
                                        href="https://plus.google.com/"
                                        target="_blank"
                                        title="Google Plus" rel="noreferrer"
                                    >
                                        <i className="zmdi zmdi-google-plus" />
                                    </a>
                                </li>
                                <li>
                                    <a className="bg--google" href="#" target="_blank" title="Google">
                                        <i className="zmdi zmdi-google" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Offset MEnu */}
                {/* Start Cart Panel */}
                <div className="shopping__cart">
                    <div className="shopping__cart__inner">
                        <div className="offsetmenu__close__btn">
                            <a href="#">
                                <i className="zmdi zmdi-close" />
                            </a>
                        </div>
                        <div className="shp__cart__wrap">
                            <div className="shp__single__product">
                                <div className="shp__pro__thumb">
                                    <a href="#">
                                        <img src="images/product/sm-img/1.jpg" alt="product images" />
                                    </a>
                                </div>
                                <div className="shp__pro__details">
                                    <h2>
                                        <a href="product-details.html">BO&amp;Play Wireless Speaker</a>
                                    </h2>
                                    <span className="quantity">QTY: 1</span>
                                    <span className="shp__price">$105.00</span>
                                </div>
                                <div className="remove__btn">
                                    <a href="#" title="Remove this item">
                                        <i className="zmdi zmdi-close" />
                                    </a>
                                </div>
                            </div>
                            <div className="shp__single__product">
                                <div className="shp__pro__thumb">
                                    <a href="#">
                                        <img src="images/product/sm-img/2.jpg" alt="product images" />
                                    </a>
                                </div>
                                <div className="shp__pro__details">
                                    <h2>
                                        <a href="product-details.html">Brone Candle</a>
                                    </h2>
                                    <span className="quantity">QTY: 1</span>
                                    <span className="shp__price">$25.00</span>
                                </div>
                                <div className="remove__btn">
                                    <a href="#" title="Remove this item">
                                        <i className="zmdi zmdi-close" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ul className="shoping__total">
                            <li className="subtotal">Subtotal:</li>
                            <li className="total__price">$130.00</li>
                        </ul>
                        <ul className="shopping__btn">
                            <li>
                                <a href="cart.html">View Cart</a>
                            </li>
                            <li className="shp__checkout">
                                <a href="checkout.html">Checkout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* End Cart Panel */}
            </div>
            {/* End Offset Wrapper */}
            {/* Start Bradcaump area */}
            <div
                className="ht__bradcaump__area"
                style={{
                    background:
                        "rgba(0, 0, 0, 0) url(images/bg/checkout.webp) no-repeat scroll center center / cover"
                }}
            >
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title" style={{color:"white"}}>Checkout</h2>
                                    <nav className="bradcaump-inner">
                                        
                                        <a className="breadcrumb-item" href="index.html" style={{color:"white"}}>
                                            Home
                                        </a>
                                        <span className="brd-separetor" style={{color:"white"}}>/</span>
                                        <span className="breadcrumb-item active" style={{color:"white"}}>Checkout</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Bradcaump area */}
            {/* Start Checkout Area */}
            <section className="our-checkout-area ptb--120 bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                            <div className="ckeckout-left-sidebar">
                                {/* Start Checkbox Area */}
                                <div className="checkout-form">
                                    <h2 className="section-title-3">Billing details</h2>
                                    <div className="checkout-form-inner">
                                        <div className="single-checkout-box">
                                            <input type="text" placeholder="First Name*" />
                                            <input type="text" placeholder="Last Name*" />
                                        </div>
                                        <div className="single-checkout-box">
                                            <input type="email" placeholder="Email*" />
                                            <input type="text" placeholder="Phone*" />
                                        </div>
                                        <div className="single-checkout-box select-option ">
                                            <select>
                                                <option>Country*</option>
                                                <option>Bangladesh</option>
                                                <option>Bangladesh</option>
                                                <option>Bangladesh</option>
                                                <option>Bangladesh</option>
                                            </select>
                                            <input type="text" placeholder="Company Name*" />
                                        </div>
                                        <div className="single-checkout-box">
                                            <input type="email" placeholder="State*" />
                                            <input type="text" placeholder="Zip Code*" />
                                        </div>
                                        <div className="single-checkout-box checkbox">
                                            <input id="remind-me" type="checkbox" />
                                            <label htmlFor="remind-me">
                                                <span />
                                                Create a Account ?
                                            </label>
                                        </div>
                                        <div className="contact-btn mt--20">
                                        <button type="submit" className="fv-btn">Submit</button>
                                            {/* <button type="submit">Button</button> */}
                                        </div>
                                    </div>
                                </div>
                                {/* End Checkbox Area */}
                                {/* Start Payment Box */}
                                
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="checkout-right-sidebar">
                                <div className="our-important-note">
                                    <h2 className="section-title-3">Note :</h2>
                                    <p className="note-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do
                                        eiusmod tempor incididunt ut laborekf et dolore magna aliqua.
                                    </p>
                                    <ul className="important-note">
                                        <li>
                                            <a href="#">
                                                <i className="zmdi zmdi-caret-right-circle" />
                                                Lorem ipsum dolor sit amet, consectetur nipabali
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="zmdi zmdi-caret-right-circle" />
                                                Lorem ipsum dolor sit amet
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="zmdi zmdi-caret-right-circle" />
                                                Lorem ipsum dolor sit amet, consectetur nipabali
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="zmdi zmdi-caret-right-circle" />
                                                Lorem ipsum dolor sit amet, consectetur nipabali
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="zmdi zmdi-caret-right-circle" />
                                                Lorem ipsum dolor sit amet
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="puick-contact-area mt--60">
                                    <h2 className="section-title-3">Quick Contract</h2>
                                    <a href="phone:+8801722889963">+88 01900 939 500</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Checkout Area */}
            {/* Start Footer Area */}
            <footer
                className="htc__foooter__area"
                style={{
                    background:
                        "rgba(0, 0, 0, 0) url(images/bg/6.jpg) no-repeat scroll center center / cover",

                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="footer__container clearfix">
                            {/* Start Single Footer Widget */}
                            <div className="col-md-3 col-lg-3 col-sm-6">
                                <div className="ft__widget">
                                    <div className="ft__logo">
                                        <a href="index.html">
                                            <img src="images/logo/uniqlo.png" alt="footer logo" />
                                        </a>
                                    </div>
                                    <div className="footer__details">
                                        <p>
                                            Get 10% discount with notified about the latest news and
                                            updates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                            {/* Start Single Footer Widget */}
                            <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smb-30 xmt-30">
                                <div className="ft__widget">
                                    <h2 className="ft__title">Newsletter</h2>
                                    <div className="newsletter__form">
                                        <div className="input__box">
                                            <div id="mc_embed_signup">
                                                <form
                                                    action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                                                    method="post"
                                                    id="mc-embedded-subscribe-form"
                                                    name="mc-embedded-subscribe-form"
                                                    className="validate"
                                                    target="_blank"
                                                    noValidate=""
                                                >
                                                    <div
                                                        id="mc_embed_signup_scroll"
                                                        className="htc__news__inner"
                                                    >
                                                        <div className="news__input">
                                                            <input
                                                                type="email"
                                                                defaultValue=""
                                                                name="EMAIL"
                                                                className="email"
                                                                id="mce-EMAIL"
                                                                placeholder="Email Address"
                                                                required=""
                                                            />
                                                        </div>
                                                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                                        <div
                                                            style={{ position: "absolute", left: "-5000px" }}
                                                            aria-hidden="true"
                                                        >
                                                            <input
                                                                type="text"
                                                                name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                                                tabIndex={-1}
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="clearfix subscribe__btn">
                                                            <input
                                                                type="submit"
                                                                defaultValue="Send"
                                                                name="subscribe"
                                                                id="mc-embedded-subscribe"
                                                                className="bst__btn btn--white__color"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                            {/* Start Single Footer Widget */}
                            <div className="col-md-3 col-lg-3 col-sm-6 smt-30 xmt-30">
                                <div className="ft__widget contact__us">
                                    <h2 className="ft__title">Contact Us</h2>
                                    <div className="footer__inner">
                                        <p>
                                            28 Nguyen Tri Phuong
                                            <br />
                                            Hue
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                            {/* Start Single Footer Widget */}
                            <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                                <div className="ft__widget">
                                    <h2 className="ft__title">Follow Us</h2>
                                    <ul className="social__icon">
                                        <li>
                                            <a href="https://twitter.com/devitemsllc" target="_blank" rel="noreferrer">
                                                <i className="zmdi zmdi-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.instagram.com/devitems/"
                                                target="_blank" rel="noreferrer"
                                            >
                                                <i className="zmdi zmdi-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.facebook.com/devitems/?ref=bookmarks"
                                                target="_blank" rel="noreferrer"
                                            >
                                                <i className="zmdi zmdi-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://plus.google.com/" target="_blank" rel="noreferrer">
                                                <i className="zmdi zmdi-google-plus" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                        </div>
                    </div>

                    {/* End Copyright Area */}
                </div>
            </footer>
            {/* End Footer Area */}
        </div>

    )
}
export default Checkout