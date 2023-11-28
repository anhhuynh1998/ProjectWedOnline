/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import ProductService from "../../service/homeService/productService";
import CartService from "../../service/homeService/cartService";
import swal from "sweetalert";

const UseProduct = createContext();

const UseContext = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [productId, setProductId] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartDetailList, setCartDetailList] = useState([]);
    const [count, setCount] = useState(0);
    const productDetail = JSON.parse(localStorage.getItem("productDetail")) || [];

    useEffect(() => {
        async function getALl() {
            let response = await ProductService.getAll();
            setProductList(response.data.content);
        }
        getALl();
    }, [])

    const handleAddCart = async (data) => {
        if (localStorage.getItem("jwt")) {
            let response = await CartService.addToCart(data);
            setCartDetailList(response.data);
        } else {
            if (!productDetail.some(e => e === data.id)) {
                productDetail.push(data.id);
                swal("Chúc Mừng", "Thêm Vào Giỏ Hàng Thành Công", "success")
                localStorage.setItem("productDetail", JSON.stringify(productDetail));
                setCartItemCount(productDetail.length);
            } else {
                swal("Thông Báo", "Sản Phẩm Đã Có Trong Giỏ Hàng", "error");
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