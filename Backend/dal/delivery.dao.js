let delivery = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(() => {
  delivery = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("delivery");
 }, 10000);

//Add vehicle to the database
 
const saveVehicle = async ({vechileNumber,vechileBrand,driverName}) => {


  const result = await delivery.insertOne({vechileNumber,vechileBrand,driverName})
  return result

}
const removeVehicle = async (vechileNumber) =>{

  return await delivery.deleteOne({vechileNumber:vechileNumber})

}

const editVehicle = async ({vechileNumber,vechileBrand,driverName}) =>{

 return await delivery.updateOne({vechileNumber:vechileNumber},{$set:{vechileBrand,driverName}})

}

const getVehicle = async () =>{

  const results = await delivery.find({})
  return results.toArray()

}
 




module.exports = { saveVehicle, editVehicle,getVehicle,removeVehicle };