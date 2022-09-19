import axios from 'axios';

const PRODUCTS_API_BASE_URL = "http://localhost:4353/api/products";

class ProductService {

    getProducts(){
        return axios.get(PRODUCTS_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(PRODUCTS_API_BASE_URL, product);
    }

    getProductById(productId){
        return axios.get(PRODUCTS_API_BASE_URL + '/details/' + productId);
    }

    getProductByType(productType){
        return axios.get(PRODUCTS_API_BASE_URL + productType)
    }

    updateProduct(product){
        return axios.put(PRODUCTS_API_BASE_URL + '/' + product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCTS_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService()