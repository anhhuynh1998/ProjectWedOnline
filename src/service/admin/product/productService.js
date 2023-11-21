import axios from "axios";

const PRODUCT_API = 'http://localhost:8080/api/products';
const API_SIZE = 'http://localhost:8080/api/sizes';
const API_CATEGORIES = 'http://localhost:8080/api/categories'
const API_UPLOAD_CLOUDINARY = 'http://localhost:8080/api/files/images'
export class ProductService {
    static getAllProduct(search, pageable) {
        return axios.get(`http://localhost:8080/api/products?search=${search || ''}&&pageable=${pageable || 0}`)
    }
    static getAllCategories() {
        return axios.get(API_CATEGORIES).then(response => response.data)
    }
    static getAllSizeEnum() {
        return axios.get(API_SIZE)
    }
    static getAllSubCategories(categoriesId) {
        return axios.get(`http://localhost:8080/api/categories/${categoriesId}/subCategories`).then(response => response.data)
    }
    static getAllNestedCategories(subCategoriesId) {
        return axios.get(`http://localhost:8080/api/categories/${subCategoriesId}/nestedCategories`).then(response => response.data)
    }
    static postFilesImageUpCloudinary() {
        return axios.post(API_UPLOAD_CLOUDINARY)
    }
    static createProducts(data) {
        return axios.post('http://localhost:8080/api/products', data)
    }
    static updateProducts(data, id) {
        return axios.update(`http://localhost:8080/api/products/update/${id}`, data)
    }
    static deleteProducts(id) {
        return axios.delete(`http://localhost:8080/api/products/${id}`)
    }
    static getProductsById(productId) {
        return axios.get(`http://localhost:8080/api/products/${productId}`)
    }
}