import axios from "axios";

const CATEGORY_API = `http://localhost:8080/api/home/category`;

class CategoryService{
    static getCategory(){
        return axios.get(CATEGORY_API)
    }

}
export default CategoryService