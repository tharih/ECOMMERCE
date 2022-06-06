import axios from "axios"

const INVENTORY_BASE_URL = "http://localhost:8080/api/cart"

class OrderService{

     addOrders(order){
         return axios.post(INVENTORY_BASE_URL+"/addcart",order)
 }

    // getAllOrders(){
    //     return axios.get(INVENTORY_BASE_URL+"/viewAll")    
    // }

    // getOneInventoryById(id){
    //     return axios.get(INVENTORY_BASE_URL+"/getOneInventory?inventoryId="+id)
    // }

    // viewAllByBranchName(branchName){
    //     return axios.get("http://localhost:8080/api/driver/viewAllByBranchName?branchName="+branchName)
    // }
    
    // getAllVehicles(branchName){
    //     return axios.get("http://localhost:8080/api/vehicle/viewAllByBranchName?branchName="+branchName)
    // }
    
    // pendingOrders(PendingOrder){
    //     return axios.get(INVENTORY_BASE_URL+"/findPendingOrders?pendingOrders="+PendingOrder)
    // }

    // updateInventory(id,orderStatus){
    //     return axios.get(INVENTORY_BASE_URL+"/updateInventory?orderId="+id+"&recordStatus="+orderStatus)
    // }
    
    // updateDriverID(id,driverID){
    //     return axios.get(INVENTORY_BASE_URL+"/updateInventory?orderId="+id+"&idDriver="+driverID)
    // }  
    
    // updateVehicleID(id,idVehicle){
    //     return axios.get(INVENTORY_BASE_URL+"/updateInventory?orderId="+id+"&idVehicle="+idVehicle)
    // }
    
    // updateInventory(id,orderStatus,idSalesAgent,idVehicle,idDriver){
    //     return axios.post(INVENTORY_BASE_URL+"/updateInventory?inventoryId="+id+"&recordStatus="+orderStatus+"&idSalesAgent="+idSalesAgent+"&idVehicle="+idVehicle+"&idDriver="+idDriver)
    // }
    // deleteSaleAgent(id){
    //     return axios.get(INVENTORY_BASE_URL+"/deleteSaleAgent?SaleAgentId="+id)
    // }
}

export default new OrderService()