let supplier = null;
const ObjectID = require('mongodb').ObjectId;


setTimeout(

  supplier = require('../utils/connection').db('OnlineFashionDB').collection('supplier')

,5000)



const saveSupplier = async ({id,name,address,phoneNo,email}) => {


    const result = await supplier.insetOne({id,name,address,phoneNo,email})
    return result.ops[0]

}

const removSupplier = async (id) =>{

    return await supplier.removeOne({id:id})

}

const editSupplier = async ({id,name,address,phoneNo,email}) =>{

   return await supplier.updateOne({id:id},{$set:{name,address,phoneNo,email}})

}

const getSuppliers = async () =>{

   const results = await supplier.find({})
   results.toArray()

}

module.exports={

   saveSupplier,
   removSupplier,
   editSupplier,
   getSuppliers

}