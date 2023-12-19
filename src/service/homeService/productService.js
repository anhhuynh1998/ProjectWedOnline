import axios from "axios";
import queryString from "query-string";
import { removeFalsyFields } from "../../components/layoutHome/ShopSideBar/SortPrice";


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
    } getProductByFilter

    static getProductByFilter(filter, page) {
        return axios.get(PRODUCT_API + `/filter?${removeFalsyFields(filter)}&page=${page}`)
    }
    static getProductByFilterStringify(request) {
        const url = queryString.stringify(request);
        return axios.get(PRODUCT_API + `/filter?${url}`)
    }
}
export default ProductService;
