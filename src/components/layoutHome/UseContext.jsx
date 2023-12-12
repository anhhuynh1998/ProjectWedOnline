/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import ProductService from "../../service/homeService/productService";
import CartService from "../../service/homeService/cartService";
import { ToastError, ToastSuccess } from "../../toastify/Toast";
import { useLocation, useNavigate } from "react-router-dom";
import formatPrice from "./formatPrice/FormatPrice";

const UseProduct = createContext();

const UseContext = ({ children }) => {
    const [productList, setProductList] = useState([]);
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
    console.log(categoryId);

    useEffect(() => {
        async function getALl() {
            let response = await ProductService.getAllProductByFilterHome(categoryId);
            setProductList(response.data.content);
        }
        getALl();
    }, [location, categoryId])

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
            }
        }
        else {
            const products = JSON.parse(localStorage.getItem('productDetail')) || [];
            if (products.some(e => e === data.id)) {
                ToastError('Sản Phẩm Đã Trong Giỏ Hàng');
            } else {
                products.push(data.id);
                localStorage.setItem("productDetail", JSON.stringify(products));
                ToastSuccess('Thêm Vào Giỏ Hàng Thành Công');
            }
        }
    }
    const handleSelectedProduct = (id) => {
        setCount(0);
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
            product,
            listFile,
            setCategoryId
        }}>
            {children}
        </UseProduct.Provider>
    )
}
export { UseContext, UseProduct };