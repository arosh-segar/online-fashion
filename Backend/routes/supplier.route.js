const router = require('express').Router()
const {addSupplier,getAllSuppliers,updateSupplier,deleteSupplier,addOrder,getAllOrders} = require('../api/supplier.api')
const {getStockRequests} = require("../api/stockRequest.api");

router.post("/addSupplier",async(req,res)=>{

    let supplier = req.body

    supplier = addSupplier(supplier)

    res.status(200).send(supplier)


})


router.get("/getSuppliers",async (req,res)=>{


   let suppliers = await getAllSuppliers()

   res.status(200).send(suppliers)

})


router.delete("/deleteSupplier/:id",async (req,res)=>{


   let deleted = await deleteSupplier(req.params.id)

   res.status(200).send(deleted)

})

router.put("/updateSupplier/:id",async (req,res)=>{


    let updated = await updateSupplier(req.params.id,req.body,)

    res.status(200).send(updated)

})

router.get("/getStockRequests",async(req,res)=>{

    let stockRequests = await getStockRequests()

    if(stockRequests){
        res.status(200).send(stockRequests)
    }else {
        res.status(502).send("Error")
    }

})

router.post("/addOrder",async(req,res)=>{

    let order = req.body

    order = await addOrder(order)

    res.status(200).send(order)


})


router.get("/getOrders",async (req,res)=>{


    let orders = await getAllOrders()
console.log(orders)
    res.status(200).send(orders)

})
//
//
// router.delete("/deleteSupplier/:id",async (req,res)=>{
//
//
//     let deleted = await deleteSupplier(req.params.id)
//
//     res.status(200).send(deleted)
//
// })
//
// router.put("/updateSupplier/:id",async (req,res)=>{
//
//
//     let updated = await updateSupplier(req.params.id,req.body,)
//
//     res.status(200).send(updated)
//
// })

module.exports=router
