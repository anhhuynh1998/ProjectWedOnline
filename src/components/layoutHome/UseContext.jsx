import { createContext, useEffect, useState } from "react";
import ProductService from "../../homeService/productService";

const UseProduct = createContext();

const UseContext = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [productId, setProductId] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartDetailList, setCartDetailList] = useState([]);

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
            cartDetailList, setCartDetailList
        }}>
            {children}
        </UseProduct.Provider>
    )
}
export { UseContext, UseProduct };