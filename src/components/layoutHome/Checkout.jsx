
const Checkout = () => {

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
            
            {/* End Footer Area */}
        </div>

    )
}
export default Checkout