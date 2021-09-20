const { saveVehicle, getVehicle,editVehicle,removeVehicle} = require("../dal/delivery.dao");
 const {saveDeliveryOrder,getOrder} = require("../dal/deliveryOrder.dao");
 const {getOrders,editStatus} = require("../dal/purchaseOrder.dao");

 
const createVehicle = async({vechileNumber,vechileBrand,driverName})=>{

  const vehicle = {
    vechileNumber: vechileNumber,
    vechileBrand: vechileBrand,
    driverName:driverName
  }

  return await saveVehicle(vehicle)


}
const deleteVehicle = async(vechileNumber) => {

  return await removeVehicle(vechileNumber)

}

const updateVehicle = async(vechileNumber,{vechileBrand,driverName})=>{

   return await editVehicle({vechileNumber,vechileBrand,driverName})

}

const getAllVehicle = async() => {

   return await getVehicle()

}
const getAllOrders = async() => {

  return await getOrders()

}

const createDeliveryOrders = async({orderId,deliveryDate,orderDate,location,vehicleNumber})=>{

  const deliveryOrder = {
    orderId: orderId,
    deliveryDate: deliveryDate,
    orderDate: orderDate,
    location: location,
    vehicleNumber: vehicleNumber

  }
  return await saveDeliveryOrder(deliveryOrder)
}
const updateStatus = async(_id,{status})=>{
  /* console.log(status); */
  return await editStatus({_id,status})


}
const getAll_DOrders = async() => {

  return await getOrder()

}

module.exports = { createVehicle,getAllVehicle,updateVehicle,deleteVehicle,getAllOrders,createDeliveryOrders,updateStatus,getAll_DOrders };