/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import ProductService from "../../service/homeService/productService";
import CartService from "../../service/homeService/cartService";
import { ToastError, ToastSuccess } from "../../toastify/Toast";
import { useLocation } from "react-router-dom";

const UseProduct = createContext();

const UseContext = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [productId, setProductId] = useState('');
    const [cartDetailList, setCartDetailList] = useState([]);
    const [count, setCount] = useState(0);
    const [logoutIcon, setLogoutIcon] = useState(localStorage.getItem("jwt"));
    const location = useLocation();

    useEffect(() => {
        async function getALl() {
            let response = await ProductService.getAll();
            setProductList(response.data.content);
        }
        getALl();
    }, [location])

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
            }
            else {
                products.push(data.id);
                localStorage.setItem("productDetail", JSON.stringify(products));
                ToastSuccess('Thêm Vào Giỏ Hàng Thành Công');
            }
        }
    }

    return (
        <UseProduct.Provider value={{
            productList, setProductList,
            productId, setProductId,
            cartDetailList, setCartDetailList,
            count, setCount,
            handleAddCart,
            logoutIcon, setLogoutIcon,
        }}>
            {children}
        </UseProduct.Provider>
    )
}
export { UseContext, UseProduct };