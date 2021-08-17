const router = require('express').Router()
const {addSupplier,getAllSuppliers,updateSupplier,deleteSupplier} = require('../api/supplier.api')

router.post("/add",async(req,res)=>{

    let supplier = req.body

    supplier = addSupplier(supplier)


})


router.get("/get",async (req,res)=>{


   let suppliers = await getAllSuppliers()

   res.status(200).send(suppliers)

})


router.delete("/delete/:id",async (req,res)=>{


    await deleteSupplier(req.params.id)

})

module.exports=router