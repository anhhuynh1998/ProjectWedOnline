import axios from "axios"

const CART_API = 'http://localhost:8080/api/admin/cart'
export class CartService {
    static soldProduct() {
        return axios.get(`${CART_API}/sold`)
    }
    static percentTheDay() {
        return axios.get(`${CART_API}/percent`)
    }
    static quarterlyRevenue() {
        return axios.get(`${CART_API}/quarterly`)
    }
    static getAllCart() {
        return axios.get(`${CART_API}/list`)
    }
    static searchNameAndPhone(search, status) {
        return axios.get(`${CART_API}/search?search=${search}&statusId=${status || ""}`)
    }
    static updateStatus(cartId, statusId) {
        return axios.put(`${CART_API}?cartId=${cartId}&statusId=${statusId}`);
    }
    static deleteProduct(id){
        return axios.delete(`${CART_API}/${id}`)
    }
}