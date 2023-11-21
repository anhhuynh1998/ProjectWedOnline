import { useEffect, useState } from "react"
import Category from "./Category"
import SearchProduct from "./SearchProduct"
import SizeProduct from "./SizeProduct"
import SortPrice from "./SortPrice"
import Tags from "./Tags"
import ProductShopComponent from "./ProductShop"
import ProductService from "../../../homeService/productService"
// import CategoryService from "../../../homeService/categoryService"

const ShopSideBar = () => {
    const [sortPrice, setSortPrice] = useState({
        min: "",
        max: ""
    });
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [size, setSelectedSize] = useState("");
    const [category, setCategories] = useState([]);
    console.log(sortPrice);

    useEffect(() => {
        async function getALlProducts() {
            console.log(sortPrice.max);
            let response = await ProductService.getProductByFilter(sortPrice.min,
                sortPrice.max, search, size, category);
            setProducts(response.data.content);
        }
        getALlProducts();
    }, [sortPrice, search, size, category])
    // useEffect(() => {
    //     async function getProductsFromCategory() {
    //         let response = await CategoryService.getProductsByCategory();
    //         console.log("loai o day", response.data.content);
    //         setCategories(response.data.content);
    //     }
    //     getProductsFromCategory();
    // }, [])

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
                    <SearchProduct setSearch={setSearch} />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                                <div className="htc__shop__left__sidebar">

                                    {/* Start Range */}
                                    <SortPrice setSortPrice={setSortPrice} />

                                    {/* category */}
                                    <Category setCategories={setCategories} />

                                    {/* Start Size Cat */}
                                    <SizeProduct setSelectedSize={setSelectedSize} />

                                    {/* Start Tag Area */}
                                    <Tags />
                                </div>
                            </div>
                            <ProductShopComponent productList={products} />
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