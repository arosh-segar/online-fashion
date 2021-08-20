const router = require('express').Router()
const {addSupplier,getAllSuppliers,updateSupplier,deleteSupplier} = require('../api/supplier.api')

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


    await deleteSupplier(req.params.id)

})

module.exports=router