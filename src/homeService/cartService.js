import axios from "axios";

const CART_API = `http://localhost:8080/api/home/carts`;

class CartService {
    static findAllByUser() {
        return axios.get(CART_API)
    }
    static addToCart(data) {
        return axios.post(`${CART_API}/addToCart`, data)
    }
}
export default CartService;