import { NavLink } from "react-router-dom"

const Cart = () => {
    return (
        <div >
            {/* Start Header Style */}

          
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
                                    <img src="images/bg/6.jpg" alt="logo" />
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
                            {/* <ul className="off__soaial__link">
                  <li>
                    <a
                      className="bg--twitter"
                      href="https://twitter.com/devitemsllc"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="zmdi zmdi-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg--instagram"
                      href="https://www.instagram.com/devitems/"
                      target="_blank"
                      title="Instagram"
                    >
                      <i className="zmdi zmdi-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg--facebook"
                      href="https://www.facebook.com/devitems/?ref=bookmarks"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="zmdi zmdi-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg--googleplus"
                      href="https://plus.google.com/"
                      target="_blank"
                      title="Google Plus"
                    >
                      <i className="zmdi zmdi-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a className="bg--google" href="#" target="_blank" title="Google">
                      <i className="zmdi zmdi-google" />
                    </a>
                  </li>
                </ul> */}
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
                        "rgba(0, 0, 0, 0) url(images/bg/aoquan.jpeg) no-repeat scroll center center / cover"
                }}
            >
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title" style={{ color: "white" }}>Cart</h2>
                                    <nav className="bradcaump-inner" >
                                        <a className="breadcrumb-item" href="index.html" style={{ color: "white" }}>
                                            Home
                                        </a>
                                        <span className="brd-separetor" style={{ color: "white" }}>/</span>
                                        <span className="breadcrumb-item active" style={{ color: "white" }}>Cart</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Bradcaump area */}
            {/* cart-main-area start */}
            <div className="cart-main-area ptb--120 bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form action="#">
                                <div className="table-content table-responsive col-xs-12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src="images/product/4.png" alt="product img" />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">Vestibulum suscipit</a>
                                                </td>
                                                <td className="product-price">
                                                    <span className="amount">£165.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <input type="number" defaultValue={1} />
                                                </td>
                                                <td className="product-subtotal">£165.00</td>
                                                <td className="product-remove">
                                                    <a href="#">X</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src="images/product/3.png" alt="product img" />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">Vestibulum dictum magna</a>
                                                </td>
                                                <td className="product-price">
                                                    <span className="amount">£50.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <input type="number" defaultValue={1} />
                                                </td>
                                                <td className="product-subtotal">£50.00</td>
                                                <td className="product-remove">
                                                    <a href="#">X</a>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-sm-7 col-xs-12">
                                        <div className="buttons-cart">
                                            <input type="submit" defaultValue="Update Cart" />
                                            <a href="#">Continue Shopping</a>
                                        </div>
                                        <div className="coupon">
                                            <h3>Coupon</h3>
                                            <p>Enter your coupon code if you have one.</p>
                                            <input type="text" placeholder="Coupon code" />
                                            <input type="submit" defaultValue="Apply Coupon" />
                                        </div>
                                    </div>

                                    {/* cart totals */}
                                    <div className="col-md-4 col-sm-5 col-xs-12">
                                        <div className="cart_totals">
                                            <h2>Cart Totals</h2>
                                            <table>
                                                <tbody>
                                                    <tr className="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td>
                                                            <span className="amount">£215.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Shipping</th>
                                                        <td>
                                                            <ul id="shipping_method">
                                                                <li>
                                                                    <input type="radio" name="shipping_option" id="flatRate" />
                                                                    <label htmlFor="flatRate">
                                                                        Flat Rate: <span className="amount">£7.00</span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" name="shipping_option" id="freeShipping" />
                                                                    <label htmlFor="freeShipping">Free Shipping</label>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr className="order-total">
                                                        <th>Total</th>
                                                        <td>
                                                            <strong>
                                                                <span className="amount">£215.00</span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <NavLink to={`/checkout`}>
                                                <div className="wc-proceed-to-checkout">
                                                    <a href="checkout.html">Proceed to Checkout</a>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* cart-main-area end */}
            {/* Start Footer Area */}

            {/* 28 nguyen tri phuong */}
            
            {/* End Footer Area */}
        </div>

    )
}
export default Cart