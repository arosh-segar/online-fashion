const {saveSupplier,removeSupplier,editSupplier,getSuppliers} = require('../dal/supplier.dao')
const {saveOrder,removeOrder,editOrder,getOrders} = require('../dal/purchaseOrder.dao')
const {updateStockRequest} = require('./stockRequest.api')

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

    const order = {

        id:id,
        supplier:supplier,
        items:items,
        status:'Pending',
        orderedDate:new Date().toISOString().slice(0,10),
        deliveredDate:'-',
        amount:''

    }



   return await saveOrder(order).then(()=>{
         items.map(async item => {
             await updateStockRequest(item.requestID,"approved")
         })
     })

}

const getAllOrders = async () => {

    return await getOrders()

}

const deleteOrder = async (id) =>{

    return await removeOrder(id);

}

const updateOrder = async (id,{supplier,items,amount}) =>{

    const order = {
        id:id,
        supplier:supplier,
        items:items,
    }

    if(amount){
            order.status='Received',
            order.deliveredDate=new Date().toISOString().slice(0,10),
            order.amount=amount
    }else{
            order.status='Pending',
            order.deliveredDate='-',
            order.amount='-'
    }

     return await editOrder(order)

}

module.exports = {
    addSupplier,
    deleteSupplier,
    updateSupplier,
    getAllSuppliers,
    addOrder,
    getAllOrders,
    deleteOrder,
    updateOrder
}
