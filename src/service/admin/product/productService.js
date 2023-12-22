import { axiosInstance } from "../../axiosInstance/axiosInstance";


const PRODUCT_API = 'http://localhost:8080/api/admin/products';
const API_SIZE = 'http://localhost:8080/api/admin/sizes';
const API_STATUS = 'http://localhost:8080/api/admin/status';
const API_CATEGORIES = 'http://localhost:8080/api/admin/categories'
const API_UPLOAD_CLOUDINARY = 'http://localhost:8080/api/admin/files/images'

export class ProductService {

    static getAllProduct(search, page, size, sortField, orderByType) {
        return axiosInstance.get(PRODUCT_API + `?search=${search || ''}&page=${page || 0}&size=${size}&sort=${sortField + "," + orderByType}`);
    }

    static getAllCategories() {
        return axiosInstance.get(API_CATEGORIES).then(response => response.data)
    }

    static getAllSizeEnum() {
        return axiosInstance.get(API_SIZE)
    }
    static getAllStatusEnum() {
        return axiosInstance.get(API_STATUS)
    }

    static getAllSubCategories(categoriesId) {
        return axiosInstance.get(API_CATEGORIES + `/${categoriesId}/subCategories`).then(response => response.data)
    }

    static getAllNestedCategories(subCategoriesId) {
        return axiosInstance.get(API_CATEGORIES + `/${subCategoriesId}/nestedCategories`).then(response => response.data)
    }

    static findCategoryById(id) {
        return axiosInstance.get(API_CATEGORIES + `/${id}`)
    }

    static postFilesImageUpCloudinary() {
        return axiosInstance.post(API_UPLOAD_CLOUDINARY)
    }

    static createProducts(data) {
        return axiosInstance.post(PRODUCT_API, data)
    }

    static updateProducts(data, productId) {
        return axios.patch(PRODUCT_API + `/${productId}`, data)
    }

    static deleteProducts(productId) {
        return axiosInstance.delete(PRODUCT_API + `/${productId}`)
    }

    static getProductsById(productId) {
        return axiosInstance.get(PRODUCT_API + `/${productId}`)
    }
    static countProduct() {
        return axiosInstance.get(`${PRODUCT_API}/count`)
    }
    static findProductByCode(search){
        return axios.get(PRODUCT_API + `/add?search=${search}`)
    }
    static checkOutProduct(){
        return axios.get(PRODUCT_API + `/checkOut`)
    }
}