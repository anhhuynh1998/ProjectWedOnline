import axios from "axios";

const PRODUCT_IPA = `http://localhost:8080/api/home/product`;

class ProductService {
    static getAll() {
        return axios.get(PRODUCT_IPA);
    }
}
export default ProductService;