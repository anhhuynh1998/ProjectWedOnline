import axios from "axios";

const PRODUCT_API = 'http://localhost:8080/api/admin/products';
const API_SIZE = 'http://localhost:8080/api/admin/sizes';
const API_CATEGORIES = 'http://localhost:8080/api/admin/categories'
const API_UPLOAD_CLOUDINARY = 'http://localhost:8080/api/files/images'
export class ProductService {
    static getAllProduct() {
        return axios.get(PRODUCT_API)
    }
    static getAllProduct(search, page, size) {
        return axios.get(PRODUCT_API + `?search=${search || ''}&page=${page || 0}&size=${size}`);
    }


    static getAllCategories() {
        return axios.get(API_CATEGORIES).then(response => response.data)
    }

    static getAllSizeEnum() {
        return axios.get(API_SIZE)
    }

    static getAllSubCategories(categoriesId) {
        return axios.get(API_CATEGORIES + `/${categoriesId}/subCategories`).then(response => response.data)
    }

    static getAllNestedCategories(subCategoriesId) {
        return axios.get(API_CATEGORIES + `/${subCategoriesId}/nestedCategories`).then(response => response.data)
    }

    static findCategoryById(id) {
        return axios.get(API_CATEGORIES + `/${id}`)
    }

    static postFilesImageUpCloudinary() {
        return axios.post(API_UPLOAD_CLOUDINARY)
    }

    static createProducts(data) {
        return axios.post(PRODUCT_API, data)
    }

    static updateProducts(data, productId) {
        return axios.put(PRODUCT_API + `/${productId}`, data)
    }

    static deleteProducts(productId) {
        return axios.delete(PRODUCT_API + `/${productId}`)
    }

    static getProductsById(productId) {
        return axios.get(PRODUCT_API + `/${productId}`)
    }
}