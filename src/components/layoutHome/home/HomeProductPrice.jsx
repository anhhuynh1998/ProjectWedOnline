const HomeProductPrice = () => {
    return (

        <section className="htc__product__area ptb--130 bg__white">
            <div className="container">
                <div className="htc__product__container">
                    {/* Start Product MEnu */}
                    <div className="row">
                        <div className="col-md-12">

                            <div className="col-md-5 mx-auto">
                                <div className="small fw-light py-2">Bạn muốn tìm kiếm sản phẩm gì ?</div>
                                <div className="input-group">
                                    <input
                                        className="form-control border-end-0 border rounded-pill small fw-light py-2"
                                        type="search"
                                        id="example-search-input"
                                        placeholder="search"
                                    />
                                    <span className="input-group-append " style={{ paddingLeft: "7px" }}>
                                        <button
                                            className="
                                          border-bottom-0 border rounded-pill ms-n5  btn btn-outline-danger"
                                            type="button"
                                        >
                                            <i className="fa fa-search" />
                                        </button>
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* End Product MEnu */}
                    <div className="row">
                        <div className="product__list">
                            {/* Start Single Product */}
                            <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
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
                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View"
                                                         href="#">
                                                        <span type="button" className="ti-plus"></span>
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
                                            <li className="old__price">Size</li>
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


        </section>
    )
}
export default HomeProductPrice