import axios from "axios";

const CART_API = `http://localhost:8080/api/home/carts`;

class CartService {
    static findAllByUser() {
        return axios.get(CART_API);
    }
    static addToCart(data) {
        if (data)
            return axios.post(`${CART_API}/addToCart`, data);
    }
    static checkOut(data) {
        if (data)
            return axios.patch(`${CART_API}/checkOut`, data);
    }
    static removoItem(id) {
        if (id)
            return axios.delete(`${CART_API}/${id}`);
    }
}
export default CartService;