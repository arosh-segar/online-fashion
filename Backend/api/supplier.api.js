const {saveSupplier,removeSupplier,editSupplier,getSuppliers} = require('../dal/supplier.dao')



const addSupplier = async({supplierID,name,address,phoneNo,email})=>{

   const supplier = {
       id:supplierID,
       name:name,
       address:address,
       phoneNo:phoneNo,
       email:email
   }

   return await saveSupplier(supplier)


}

const deleteSupplier = async(id) => {

   return await removeSupplier(id)

}

const updateSupplier = async(id,name,address,phoneNo,email)=>{

    return await editSupplier({id,name,address,phoneNo,email})

}

const getAllSuppliers = async() => {

    return await getSuppliers()

}

module.exports = {
    addSupplier,
    deleteSupplier,
    updateSupplier,
    getAllSuppliers
}