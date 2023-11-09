const ShopSideBar = () => {

    return (
        <>
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
                {/* End Offset Wrapper */}
                {/* Start Bradcaump area */}
                <div
                    className="ht__bradcaump__area"
                    style={{
                        background:
                            "rgba(0, 0, 0, 0) url(images/bg/sale.jpeg) no-repeat scroll center center / cover"
                    }}
                >
                    <div className="ht__bradcaump__wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="bradcaump__inner text-center">
                                        <h2 className="bradcaump-title" style={{ color: "white" }}>Shop Sidebar</h2>
                                        <nav className="bradcaump-inner">
                                            <a className="breadcrumb-item" href="/home" style={{ color: "white" }}>
                                                Home
                                            </a>
                                            <span className="brd-separetor" style={{ color: "white" }}>/</span>
                                            <span className="breadcrumb-item active" style={{ color: "white" }}>Shop Sidebar</span>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Bradcaump area */}
                {/* Start Our ShopSide Area */}
                <section className="htc__shop__sidebar bg__white ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                                <div className="htc__shop__left__sidebar">
                                    {/* Start Range */}
                                    <div className="htc-grid-range">
                                        <h4 className="section-title-4">FILTER BY PRICE</h4>
                                        <div className="form-row align-items-center">
                                                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect"></label>
                                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option selected disabled>Choose...</option>
                                                    <option value="1">0-500k</option>
                                                    <option value="2">500k-1000k</option>
                                                    <option value="3">1000k</option>
                                                </select>
                                           
                                            </div>
                                        </div>
                                        {/* End Range */}
                                        {/* Start Product Cat */}
                                        <div className="htc__shop__cat">
                                            <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                                            <ul className="sidebar__list">
                                                <li>
                                                    <a href="#">
                                                        Accessories <span>3</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Book <span>4</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Clothing <span>3</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Homelife <span>6</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Kids &amp; Baby <span>10</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Stationery <span>3</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Health &amp; Beauty <span>12</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Home Appliances <span>15</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Product Cat */}
                                        {/* Start Color Cat */}
                                        <div className="htc__shop__cat">
                                            <h4 className="section-title-4">CHOOSE COLOUR</h4>
                                            <ul className="sidebar__list">
                                                <li className="black">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-circle" />
                                                        Black<span>3</span>
                                                    </a>
                                                </li>
                                                <li className="blue">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-circle" />
                                                        Blue <span>4</span>
                                                    </a>
                                                </li>
                                                <li className="brown">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-circle" />
                                                        Brown <span>3</span>
                                                    </a>
                                                </li>
                                                <li className="red">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-circle" />
                                                        Red <span>6</span>
                                                    </a>
                                                </li>
                                                <li className="orange">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-circle" />
                                                        Orange <span>10</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Color Cat */}
                                        {/* Start Size Cat */}
                                        <div className="htc__shop__cat">
                                            <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                                            <ul className="sidebar__list">
                                                <li>
                                                    <a href="#">
                                                        xl <span>3</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        l <span>4</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        lm <span>3</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        ml <span>6</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        m <span>10</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        ml <span>3</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Size Cat */}
                                        {/* Start Tag Area */}
                                        <div className="htc__shop__cat">
                                            <h4 className="section-title-4">Tags</h4>
                                            <ul className="htc__tags">
                                                <li>
                                                    <a href="#">All</a>
                                                </li>
                                                <li>
                                                    <a href="#">Clothing</a>
                                                </li>
                                                <li>
                                                    <a href="#">Kids</a>
                                                </li>
                                                <li>
                                                    <a href="#">Accessories</a>
                                                </li>
                                                <li>
                                                    <a href="#">Stationery</a>
                                                </li>
                                                <li>
                                                    <a href="#">Homelife</a>
                                                </li>
                                                <li>
                                                    <a href="#">Appliances</a>
                                                </li>
                                                <li>
                                                    <a href="#">Clothing</a>
                                                </li>
                                                <li>
                                                    <a href="#">Baby</a>
                                                </li>
                                                <li>
                                                    <a href="#">Beauty</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Tag Area */}
                                    </div>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 smt-30">
                                    <div className="row">

                                    </div>
                                    <div className="row">
                                        <div className="product__list">

                                            <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 col-sm-4 col-xs-12 cat--4">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/14.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li>
                                                                    <a
                                                                        data-toggle="modal"
                                                                        data-target="#productModal"
                                                                        title="Quick View"
                                                                        className="quick-view modal-view detail-link"
                                                                        href="#"
                                                                    >
                                                                        <span className="ti-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="Add TO Cart" href="cart.html">
                                                                        <span className="ti-shopping-cart" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Wood Long TV Board</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                            {/* Start Single Product */}
                                            <div className="col-md-3 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                                                <div className="product foo">
                                                    <div className="product__inner">
                                                        <div className="pro__thumb">
                                                            <a href="#">
                                                                <img src="images/product/1.png" alt="product images" />
                                                            </a>
                                                        </div>
                                                        <div className="product__hover__info">
                                                            <ul className="product__action">
                                                                <li >
                                                                    <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                        <span className="ti-plus"></span>
                                                                    </a>
                                                                </li>
                                                                <li >
                                                                    <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="add__to__wishlist">
                                                            <a
                                                                data-toggle="tooltip"
                                                                title="Add To Wishlist"
                                                                className="add-to-cart"
                                                                href="wishlist.html"
                                                            >
                                                                <span className="ti-heart" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product__details">
                                                        <h2>
                                                            <a href="product-details.html">Simple Black Clock</a>
                                                        </h2>
                                                        <ul className="product__price">
                                                            <li className="old__price">$16.00</li>
                                                            <li className="new__price">$10.00</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Product */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                {/* End Footer Area */}
            </div>
            {/* Body main wrapper end */}
            {/* QUICKVIEW PRODUCT */}
            
        </>


    )
}
export default ShopSideBar