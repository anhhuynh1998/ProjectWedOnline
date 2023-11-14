import axios from "axios";

const PRODUCT_IPA = `http://localhost:8080/api/home/product`;


class ProductService {
    static getAll() {
        return axios.get(PRODUCT_IPA);
    }
    static getById(id){
        return axios.get(PRODUCT_IPA+`/${id}`)
    }
    static getProductByFilter(min,max,search){
        return axios.get(PRODUCT_IPA + `/filter?priceMin=${min}&priceMax=${max}&search=${search}`)
    }
    
}
export default ProductService;