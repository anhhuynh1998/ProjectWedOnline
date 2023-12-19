/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import Category from "./Category"
import SearchProduct from "./SearchProduct"
import SizeProduct from "./SizeProduct"
import SortPrice, { removeFalsyFields } from "./SortPrice"
import Tags from "./Tags"
import ProductShop from "./ProductShop"
import ProductService from "../../../service/homeService/productService"
import Login from "../Login"
import { UseProduct } from "../UseContext";
import Background from "../userHome/background"
import { useNavigate } from "react-router-dom"
const ShopSideBar = () => {
    const { categoryId, page, setPage, setProducts, searchParams, filter } = useContext(UseProduct);
    const [sortPrice, setSortPrice] = useState({
        min: "",
        max: ""
    });
    const [search, setSearch] = useState("");
    const [size, setSelectedSize] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1)
    const [reset, setReset] = useState(false)
    const navigate = useNavigate();
    const sizeURL = getParamsInURL(searchParams?.get('size'));
    const categoryIdURL = getParamsInURL(searchParams?.get('categoryId'));
    const priceMinURL = getParamsInURL(searchParams?.get('priceMin'));
    const priceMaxURL = getParamsInURL(searchParams?.get('priceMax'));
    console.log(page);

    async function getALlProducts() {
        if (page >= totalPages) return;
        sizeURL ? filter.size = sizeURL : filter.size = "";
        categoryIdURL ? filter.categoryId = categoryIdURL : filter.categoryId = categoryId || "";
        priceMinURL ? filter.priceMin = priceMinURL : filter.priceMin = "";
        priceMaxURL ? filter.priceMax = priceMaxURL : filter.priceMax = "";

        setIsLoading(true);
        let response = await ProductService.getProductByFilter(filter, page);
        setProducts(prevProduct => [...prevProduct, ...response.data.content]);
        if (page < response.data.totalPages) {
            setPage((prev) => prev + 1)
            setTotalPages(response.data.totalPages)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        async function fetchData() {
            sizeURL ? filter.size = sizeURL : filter.size = "";
            categoryIdURL ? filter.categoryId = categoryIdURL : filter.categoryId = "";
            priceMinURL ? filter.priceMin = priceMinURL : filter.priceMin = "";
            priceMaxURL ? filter.priceMax = priceMaxURL : filter.priceMax = "";

            setIsLoading(true);
            let response = await ProductService.getProductByFilter(filter, 0);
            setProducts([...response.data.content]);
            if (page < response.data.totalPages) {
                setPage(1)
                setTotalPages(response.data.totalPages)
            }
            setIsLoading(false);
        }
        fetchData()
    }, [reset])

    function getParamsInURL(inputString) {
        const indexOfSlash = inputString?.indexOf('/');
        if (indexOfSlash !== -1) {
            return inputString?.slice(0, indexOfSlash);
        }
        return inputString;
    }

    useEffect(() => {
        setPage(0)
        setProducts([])
        setReset((prev) => !prev)
        navigate(`/sidebar?${removeFalsyFields(filter)}`)
    }, [filter])

    return (
        <>
            <Login />
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
                <Background message={"Mua Sắm"}
                    img={"rgba(0, 0, 0, 0) url(http://localhost:5173/images/bg/2nd1.jpeg) no-repeat scroll center center / cover"}
                    animateH2={"animate__animated animate__fadeInDown"}
                    animateNav={"animate__animated animate__fadeInDown"} />

                <section className="htc__shop__sidebar bg__white ptb--20">
                    <SearchProduct setSearch={setSearch} setPage={setPage} />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                                <div className="htc__shop__left__sidebar">

                                    {/* Start Range */}
                                    <SortPrice setSortPrice={setSortPrice} getParamsInURL={getParamsInURL} />

                                    {/* category */}
                                    <Category />

                                    {/* Start Size Cat */}
                                    <SizeProduct setSelectedSize={setSelectedSize} getParamsInURL={getParamsInURL} />

                                    {/* Start Tag Area */}
                                    <Tags />
                                </div>
                            </div>
                            <ProductShop getALlProducts={getALlProducts} isLoading={isLoading} />
                        </div>

                    </div>
                </section>
            </div>
        </>


    )
}
export default ShopSideBar