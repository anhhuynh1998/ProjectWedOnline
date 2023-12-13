import axios from "axios";
import queryString from "query-string";

const PRODUCT_API = `http://localhost:8080/api/home/products`;

class ProductService {
    static getAll() {
        return axios.get(PRODUCT_API);
    }
    static getById(id) {
        if (id) {
            return axios.get(PRODUCT_API + `/${id}`);
        }
    }
    static getAllProductByFilterHome(categoryId) {
        if (categoryId)
            return axios.get(PRODUCT_API + `/filterHome?categoryId=${categoryId}`)
    }

    static getProductByFilter(min, max, search, size, categoryId, page) {
        return axios.get(PRODUCT_API + `/filter?priceMin=${min}&priceMax=${max}&search=${search}&size=${size}&categoryId=${categoryId}&page=${page}`)
    }
    static getProductByFilterStringify(request) {
        const url = queryString.stringify(request);
        return axios.get(PRODUCT_API + `/filter?${url}`)
    }
}
export default ProductService;
