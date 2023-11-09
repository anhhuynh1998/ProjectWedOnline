/* eslint-disable react/jsx-no-target-blank */

import Login from "../Login";
import HomeProductPrice from "./HomeProductPrice";
import InforProduct from "./InforProduct";



const HomePage = () => {
    

    return (
        
        <div>
            
            <div>
                {/* Start Header Style */}
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
                                            <a href="product-details.html">
                                                BO&amp;Play Wireless Speaker
                                            </a>
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

                <div
                    className="slide slider__full--screen"
                    style={{
                        background:
                            "rgba(0, 0, 0, 0) url(images/bg/thu.jpeg) no-repeat scroll center center / cover",
                        height: "500px"
                    }}
                >
                    <div className="ht__bradcaump__wrap ">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-xs-12 ">
                                    <div className="bradcaump__inner text-center " style={{ paddingLeft: "530px" }}>
                                        <h2 className="bradcaump-title" style={{ color: "white" }}>New Product Collection</h2>

                                        <a className="breadcrumb-item" style={{ color: "white" }}>
                                            Show Now
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Single Slide */}

                    </div>
                </div>
                {/* List Product */}
                <HomeProductPrice />
            </div>
            
            <InforProduct />
            <Login />
            {/* Body main wrapper end */}
            {/* QUICKVIEW PRODUCT */}
        </div >
    )
}
export default HomePage;