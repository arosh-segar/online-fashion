let supplier = null;
const ObjectID = require('mongodb').ObjectId;


setTimeout(async ()=>{
   supplier =await require('../utils/connection').db('OnlineFashionDB').collection('supplier')
}
,3000)



const saveSupplier = async ({id,name,address,phoneNo,email}) => {


    const result = await supplier.insertOne({id,name,address,phoneNo,email})
    return result

}

const removeSupplier = async (id) =>{

    return await supplier.deleteOne({id:id})

}

const editSupplier = async ({id,name,address,phoneNo,email}) =>{
    

   return await supplier.replaceOne({id:id},{id,name,address,phoneNo,email})

}

const getSuppliers = async () =>{

    const results = await supplier.find({})
    return results.toArray()

}



module.exports={

   saveSupplier,
   removeSupplier,
   editSupplier,
   getSuppliers

}