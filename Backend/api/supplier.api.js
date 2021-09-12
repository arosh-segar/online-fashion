const {saveSupplier,removeSupplier,editSupplier,getSuppliers} = require('../dal/supplier.dao')
const {saveOrder,removeOrder,editOrder,getOrders} = require('../dal/purchaseOrder.dao')


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

const updateSupplier = async(id,{name,address,phoneNo,email})=>{

    return await editSupplier({id,name,address,phoneNo,email})

}

const getAllSuppliers = async() => {

    return await getSuppliers()

}

const addOrder = async({id,supplier,items})=>{

    const Order = {

        id:id,
        supplier:supplier,
        items:items,
        status:'Pending',
        orderedDate:new Date().getDate(),
        deliveredDate:'-'

    }
console.log(Order)
    return await saveOrder(Order)

}

const getAllOrders = async () => {

    return await getOrders()

}

module.exports = {
    addSupplier,
    deleteSupplier,
    updateSupplier,
    getAllSuppliers,
    addOrder,
    getAllOrders
}
