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


   let deleted = await deleteSupplier(req.params.id)

   res.status(200).send(deleted)

})

router.put("/updateSupplier/:id",async (req,res)=>{


    let updated = await updateSupplier(req.params.id,req.body,)

    res.status(200).send(updated)

})

module.exports=router