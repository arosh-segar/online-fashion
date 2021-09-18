let purchaseOrder = null;
const ObjectID = require('mongodb').ObjectId;


setTimeout(async ()=>{
        purchaseOrder =await require('../utils/connection').db('OnlineFashionDB').collection('order')
    }
    ,3000)



const saveOrder = async ({id,items,date}) => {


    const result = await purchaseOrder.insertOne({id,items,date})
    return result

}

const removeOrder = async (id) =>{

    return await purchaseOrder.deleteOne({id:id})

}

const editOrder = async ({id,name,address,phoneNo,email}) =>{


    return await purchaseOrder.replaceOne({id:id},{id,name,address,phoneNo,email})

}

const getOrders = async () =>{

    const results = await purchaseOrder.find({})
    return results.toArray()

}
const editStatus = async ({_id,status}) =>{

    return await purchaseOrder.updateOne({_id:_id},{$set:{status}})
   
   }

module.exports={

    saveOrder,
    removeOrder,
    editOrder,
    getOrders,
    editStatus

}