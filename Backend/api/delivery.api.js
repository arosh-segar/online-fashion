const { saveVehicle, getVehicle,editVehicle,removeVehicle } = require("../dal/delivery.dao");

 
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

module.exports = { createVehicle,getAllVehicle,updateVehicle,deleteVehicle };