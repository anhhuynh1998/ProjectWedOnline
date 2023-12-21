import axios from "axios";
import { axiosInstance } from "../axiosInstance/axiosInstance";

const CART_API = `http://localhost:8080/api/home/carts`;

class CartService {
    static showCartDetailsNotLogin(data) {
        if (data) {
            return axios.post(`${CART_API}/showCartDetailsNotLogin`, { productIdList: data })
        }
    }
    static findAllByUser() {
        return axiosInstance.get(CART_API);
    }
    static addToCart(data) {
        if (data)
            return axiosInstance.post(`${CART_API}/addToCart`, data);
    }
    static checkOut(data) {
        if (data) {
            return axiosInstance.patch(`${CART_API}/checkOut`, data);
        }
    }
    static checkOutNotLogin(data) {
        if (data) {
            data.productIds = JSON.parse(localStorage.getItem('productDetail')) || [];
            return axios.post(`${CART_API}/checkOutNotLogin`, data);
        }
    }
    static removeItem(id) {
        if (id)
            return axiosInstance.delete(`${CART_API}/${id}`);
    }
    static productsRevenue(id) {
        if (id)
            return axios.get(`${CART_API}/revenue${id}`);
    }

}
export default CartService;