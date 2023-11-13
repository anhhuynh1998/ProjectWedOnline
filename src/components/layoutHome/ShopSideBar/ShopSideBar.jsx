import Category from "./Category"
import ProductShop from "./ProductShop"
import SearchProduct from "./SearchProduct"
import SizeProduct from "./SizeProduct"
import SortPrice from "./SortPrice"
import Tags from "./Tags"

const ShopSideBar = () => {

    return (
        <>
            <div >
                <div className="body__overlay" />
                <div className="offset__wrapper">
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

                </div>
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

                <section className="htc__shop__sidebar bg__white ptb--20">
                    <SearchProduct />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                                <div className="htc__shop__left__sidebar">

                                    {/* Start Range */}
                                    <SortPrice />

                                    {/* category */}
                                    <Category />

                                    {/* Start Size Cat */}
                                    <SizeProduct />

                                    {/* Start Tag Area */}
                                    <Tags />
                                    {/* End Tag Area */}
                                </div>
                            </div>
                            <ProductShop />
                        </div>

        <div className="col-md-12">
        <div className="col-md-5 mx-auto" id="searchProduct">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                    </div>
                </section>
            </div>
        </>


    )
}
export default ShopSideBar