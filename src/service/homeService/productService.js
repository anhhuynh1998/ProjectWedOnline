import axios from "axios";

const PRODUCT_API = `http://localhost:8080/api/home/products`;

class ProductService {
    static getAll() {
        return axios.get(PRODUCT_API);
    }
    static getById(id) {
        if (id) {
            return axios.get(PRODUCT_API + `/${id}`);
        }
        return new Promise();
    }


    static getProductByFilter(min, max, search, size) {
        return axios.get(PRODUCT_API + `/filter?priceMin=${min}&priceMax=${max}&search=${search}&size=${size}`)
    }
}
export default ProductService;
