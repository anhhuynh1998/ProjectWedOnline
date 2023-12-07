import axios from "axios"

const CART_API = 'http://localhost:8080/api/cart'
export class CartService{
    
    static soldProduct(){
        return axios.get(`${CART_API}/sold`)
    }
}