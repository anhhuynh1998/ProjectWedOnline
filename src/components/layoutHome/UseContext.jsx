/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import ProductService from "../../service/homeService/productService";
import CartService from "../../service/homeService/cartService";
import { ToastError, ToastSuccess } from "../../toastify/Toast";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import formatPrice from "./formatPrice/FormatPrice";

const UseProduct = createContext();

const UseContext = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState({});
    const [listFile, setListFile] = useState([]);
    const [cartDetailList, setCartDetailList] = useState([]);
    const [count, setCount] = useState(0);
    const [logoutIcon, setLogoutIcon] = useState(localStorage.getItem("jwt"));
    const location = useLocation();
    const back = useNavigate();
    const formatPriceProduct = formatPrice(product.price);
    const [categoryId, setCategoryId] = useState("");
    const [page, setPage] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState({
        categoryId: "",
        priceMin: "",
        priceMax: "",
        size: "",
        totalPage: 0
    });
    const [showEdit, setShowEdit] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");


    useEffect(() => {
        async function getALl() {
            let response = await ProductService.getAll();
            setProductList(response.data.content.filter(e => e.imageUrl !== null));
            console.log(response.data.content);
            if (localStorage.getItem("jwt")) {
                let respo = await CartService.findAllByUser();
                setCount(respo.data.listCartDetail.length)
            } else {
                const productIdList = JSON.parse(localStorage.getItem('productDetail')) || [];
                let response = await CartService.showCartDetailsNotLogin(productIdList);
                setCount(response.data.listCartDetail.length)
            }
        }
        getALl();
    }, [location])

    useEffect(() => {
        async function getById() {
            let response = await ProductService.getById(productId);
            if (response && response.data) {
                setProduct(response.data);
                setListFile(response.data.listFile)
            }
        }
        getById();
    }, [productId])

    const handleAddCart = async (data) => {
        if (localStorage.getItem("jwt")) {
            let respo = await CartService.findAllByUser()
            if (respo.data.listCartDetail?.find(e => e.product.id === data.id)) {
                ToastError('Sản Phẩm Đã Trong Giỏ Hàng');
            } else {
                let response = await CartService.addToCart(data)
                setCartDetailList(response.data);
                ToastSuccess('Thêm Vào Giỏ Hàng Thành Công');
                setCount(prev => prev + 1)
            }
        }
        else {
            const products = JSON.parse(localStorage.getItem('productDetail')) || [];
            if (products.some(e => e === data.id)) {
                ToastError('Sản Phẩm Đã Trong Giỏ Hàng');
                setCount(products.length);
            } else {
                products.push(data.id);
                localStorage.setItem("productDetail", JSON.stringify(products));
                ToastSuccess('Thêm Vào Giỏ Hàng Thành Công');
                setCount(products.length);
            }
        }
    }

    const handleSelectedProduct = (id) => {
        setProductId(id);
    }
    const backHome = (message) => {
        setTimeout(() => {
            back(message)
        }, 3000)
    }

    return (
        <UseProduct.Provider value={{
            productList, setProductList,
            productId, setProductId,
            cartDetailList, setCartDetailList,
            count, setCount, formatPriceProduct,
            handleAddCart, handleSelectedProduct,
            logoutIcon, setLogoutIcon, backHome,
            product, listFile,
            categoryId, setCategoryId,
            page, setPage,
            products, setProducts,
            searchParams, setSearchParams,
            filter, setFilter,
            showEdit, setShowEdit,
            loginEmail, setLoginEmail
        }}>
            {children}
        </UseProduct.Provider>
    )
}
export { UseContext, UseProduct };