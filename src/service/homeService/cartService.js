import axios from "axios";

const CART_API = `http://localhost:8080/api/home/carts`;

class CartService {
    static showCartDetailsNotLogin(data) {
        if (data) {
            return axios.post(`${CART_API}/showCartDetailsNotLogin`, { productIdList: data })
        }
    }
    static findAllByUser() {
        return axios.get(CART_API);
    }
    static addToCart(data) {
        if (data)
            return axios.post(`${CART_API}/addToCart`, data);
    }
    static checkOut(data) {
        if (data) {
            return axios.patch(`${CART_API}/checkOut`, data);
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
            return axios.delete(`${CART_API}/${id}`);
    }
    static productsRevenue(id) {
        if (id)
            return axios.get(`${CART_API}/revenue${id}`);
    }
}
export default CartService;