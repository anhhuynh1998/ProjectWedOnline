
import ProductList from "./ProductList";

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
                        <ProductList />
                        {/* End Single Product */}
                    </div>
                </div>
            </div>
        </section >
    )
}



export default HomeProductPrice