const InforProduct = () => {

    return (
        <div id="quickview-wrapper">
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: "906px", margin: "0 0  0 -190px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ padding: " 0 0 28px 20px" }}>
                            <div className="modal-product">
                                {/* Start product images */}
                                <div className="product-images">
                                    <div className="main-image images">
                                        {/* <img alt="big images" src="images/product/big-img/1.jpg" /> */}
                                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" data-bs-interval="10000" >
                                                    <img src="images/product/big-img/1.jpg" className="d-block w-100" alt="big images" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                    </div>
                                                </div>
                                                <div className="carousel-item" data-bs-interval="2000">
                                                    <img src="images/product/big-img/1.jpg" className="d-block w-100" alt="big images" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="images/product/big-img/1.jpg" className="d-block w-100" alt="big images" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* end product images */}
                                <div className="product-info">
                                    <h1>Simple Fabric Bags</h1>
                                    <div className="rating__and__review">
                                        <ul className="rating">
                                            <li>
                                                <span className="ti-star" />
                                            </li>
                                            <li>
                                                <span className="ti-star" />
                                            </li>
                                            <li>
                                                <span className="ti-star" />
                                            </li>
                                            <li>
                                                <span className="ti-star" />
                                            </li>
                                            <li>
                                                <span className="ti-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="price-box-3">
                                        <div className="s-price-box">
                                            <span className="new-price">$17.20</span>
                                            <span className="old-price">$45.00</span>
                                        </div>
                                    </div>
                                    <div className="quick-desc">
                                        Designed for simplicity and made from high quality materials. Its sleek
                                        geometry and material combinations creates a modern look.
                                    </div>

                                    <div className="select__size">
                                        <h2>Size</h2>
                                        <ul className="color__list">
                                            <li className="l__size">
                                                <a title="L" href="#">
                                                    L
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="addtocart-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                                {/* .product-info */}
                            </div>
                            {/* .modal-product */}
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}
export default InforProduct