import axios from "axios";

class CartDetailService {
    static getAll() {
        return axios.get(`http://localhost:8080/api/home/cartDetail`)
    }
    static create(data) {
        return axios.post(`http://localhost:8080/api/home/cartDetail`, data)
    }
}
export default CartDetailService;