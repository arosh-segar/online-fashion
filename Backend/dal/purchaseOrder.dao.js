let purchaseOrder = null;
const ObjectID = require('mongodb').ObjectId;


setTimeout(async ()=>{
        purchaseOrder =await require('../utils/connection').db('OnlineFashionDB').collection('purchaseOrder')
    }
    ,3000)



const saveOrder = async ({id,supplier,items,status,orderedDate,deliveredDate}) => {


    const result = await purchaseOrder.insertOne({id,supplier,items,status,orderedDate,deliveredDate})
    return result

}

const removeOrder = async (id) =>{

    return await purchaseOrder.deleteOne({id:id})

}

const editOrder = async ({id,supplier,items,status,orderedDate,deliveredDate}) =>{


    return await purchaseOrder.replaceOne({id:id},{supplier,items,status,orderedDate,deliveredDate})

}

const getOrders = async () =>{

    const results = await purchaseOrder.find({})
    return results.toArray()

}

module.exports={

    saveOrder,
    removeOrder,
    editOrder,
    getOrders

}
