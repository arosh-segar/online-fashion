let purchaseOrder = null;
const ObjectID = require('mongodb').ObjectId;


setTimeout(async ()=>{
        purchaseOrder =await require('../utils/connection').db('OnlineFashionDB').collection('purchaseOrder')
    }
    ,3000)



const saveOrder = async ({id,supplier,items,status,orderedDate,deliveredDate,amount}) => {


    const result = await purchaseOrder.insertOne({id,supplier,items,status,orderedDate,deliveredDate,amount})
    return result

}

const removeOrder = async (id) =>{

    return await purchaseOrder.deleteOne({id:id})

}

const editOrder = async ({id,supplier,items,status,deliveredDate,amount}) =>{

    return await purchaseOrder.updateOne({id:id},{$set:{supplier:supplier,items:items,status:status,deliveredDate:deliveredDate,amount:amount}})


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
