import { useEffect, useState } from "react"
import Category from "./Category"
import SearchProduct from "./SearchProduct"
import SizeProduct from "./SizeProduct"
import SortPrice from "./SortPrice"
import Tags from "./Tags"
<<<<<<< Updated upstream
import ProductShopComponent from "./ProductShop"
import ProductService from "../../../service/homeService/productService"
=======
import ProductService from "../../../homeService/productService"
import ProductShop from "./ProductShop"
>>>>>>> Stashed changes

const ShopSideBar = () => {
    const [sortPrice, setSortPrice] = useState({
        min: "",
        max: ""
    });
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [size, setSelectedSize] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    console.log(sortPrice);

    async function getALlProducts() {
        console.log(sortPrice.max);
        setIsLoading(true);
        let response = await ProductService.getProductByFilter(sortPrice.min,
            sortPrice.max, search, size, categoryId, page);
        setProducts(prevProduct => [...prevProduct, ...response.data.content]);
        setPage(page => page + 1);
        setIsLoading(false);
    }

    useEffect(() => {
        getALlProducts();
    }, [sortPrice, search, size, categoryId])

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
                                    <Category setCategoryId={setCategoryId} />

                                    {/* Start Size Cat */}
                                    <SizeProduct setSelectedSize={setSelectedSize} />

                                    {/* Start Tag Area */}
                                    <Tags />
                                </div>
                            </div>
                            <ProductShop productList={products} getALlProducts={getALlProducts} isLoading={isLoading} />
                        </div>

                    </div>
                </section>
            </div>
        </>


    )
}
export default ShopSideBar