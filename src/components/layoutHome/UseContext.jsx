/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import ProductService from "../../service/homeService/productService";
import CartService from "../../service/homeService/cartService";
import { ToastAdToCartError, ToastAdToCartSuccess } from "../../toastify/Toast";
import { useLocation } from "react-router-dom";

const UseProduct = createContext();

const UseContext = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [productId, setProductId] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartDetailList, setCartDetailList] = useState([]);
    const [count, setCount] = useState(0);
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
            let response = await CartService.addToCart(data);
            setCartDetailList(response.data);
        } else {
            const products = JSON.parse(localStorage.getItem('productDetail')) || [];
            if (products.some(e => e === data.id)) {
                ToastAdToCartError();
            }
            else {
                products.push(data.id);
                localStorage.setItem("productDetail", JSON.stringify(products));
                setCartItemCount(products.length);
                ToastAdToCartSuccess();
            }
        }
    }

    return (
        <UseProduct.Provider value={{
            productList, setProductList,
            productId, setProductId,
            cartItemCount, setCartItemCount,
            cartDetailList, setCartDetailList,
            count, setCount,
            handleAddCart
        }}>
            {children}
        </UseProduct.Provider>
    )
}
export { UseContext, UseProduct };