let deliveryorder = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(() => {
    deliveryorder = require("../utils/connection")
      .db("OnlineFashionDB")
      .collection("deliveryorder");
   }, 10000);
  
   const saveDeliveryOrder = async ({orderId,deliveryDate,orderDate,location,vehicleNumber}) => {


    const result = await deliveryorder.insertOne({orderId,deliveryDate,orderDate,location,vehicleNumber})
    return result
  
  }
  const getOrder = async () =>{

    const results = await deliveryorder.find({})
    return results.toArray()
  
  }
  
   

  module.exports = { saveDeliveryOrder, getOrder};  