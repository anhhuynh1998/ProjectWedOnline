import axios from "axios";

const PRODUCT_IPA = `http://localhost:8080/api/home/product`;


class ProductService {
    static getAll() {
        return axios.get(PRODUCT_IPA);
    }
    static getById(id){
        return axios.get(PRODUCT_IPA+`/${id}`)
    }
    
}
export default ProductService;