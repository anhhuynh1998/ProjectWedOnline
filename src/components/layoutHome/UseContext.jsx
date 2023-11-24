/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import ProductService from "../../service/homeService/productService";

const UseProduct = createContext();

const UseContext = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [productId, setProductId] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartDetailList, setCartDetailList] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        async function getALl() {
            let response = await ProductService.getAll();
            setProductList(response.data.content);
        }
        getALl();
    }, [])

    return (
        <UseProduct.Provider value={{
            productList, setProductList,
            productId, setProductId,
            cartItemCount, setCartItemCount,
            cartDetailList, setCartDetailList,
            count, setCount
        }}>
            {children}
        </UseProduct.Provider>
    )
}
export { UseContext, UseProduct };