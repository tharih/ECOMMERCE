import axios from "axios"

const Product_BASE_URL = "http://localhost:8080/api/item"

class ProductService{

    saveProduct(product){
        return axios.post(Product_BASE_URL+"/addproducts",product)
    }

    getAllProducts(){

        return axios.get(Product_BASE_URL+"/viewAll")
          
    }

    getProductByID(id){
        return axios.get(Product_BASE_URL+"/getOneProduct?productId="+id)
    }
    
    getSuppliers(){
        return axios.get("http://localhost:8080/api/supplier/getAllSuppliers")
    }

    updateProduct(products){
        return axios.post(Product_BASE_URL+"/updateOneProduct",products)
    }
    deleteProduct(id){
        return axios.get(Product_BASE_URL+"/deleteProduct?productId="+id)
    }

    updateStock(requestsQty){
        return axios.post("http://localhost:8080/api/stockFill/addRequests",requestsQty)
    }
}

export default new ProductService()