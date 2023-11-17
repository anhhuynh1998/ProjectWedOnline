import axios from "axios";

const PRODUCT_API = `http://localhost:8080/api/home/product`;


class ProductService {
    static getAll() {
        return axios.get(PRODUCT_API);
    }
    static getById(id) {
        return axios.get(PRODUCT_API + `/${id}`)
    }

    static getProductByFilter(min, max, search) {
        return axios.get(PRODUCT_IPA + `/filter?priceMin=${min}&priceMax=${max}&search=${search}`)
    }


}
export default ProductService;