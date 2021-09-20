const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const { createVehicle,
    getAllVehicle,
    updateVehicle,
    deleteVehicle,
    getAllOrders,createDeliveryOrders,updateStatus,getAll_DOrders} = require("../api/delivery.api");

router.post("/addVehicle", async (req, res) => {

    try{

        let vehicle = req.body

        

        vehicle = createVehicle(vehicle)

        if(vehicle) {
            res.status(201).send(vehicle);
        } else {
            res.status(502).json({error:"Vehicle details could not be added"});
        }
    } catch (err) {
        console.log(err);
    }
});

router.get("/getVehicle",async (req,res)=>{


    let Vehicle = await getAllVehicle()
 
    res.status(200).send(Vehicle)
 
 })
 
 
 router.delete("/deleteVehicle/:vechileNumber",async (req,res)=>{
 
 
     await deleteVehicle(req.params.vechileNumber)
 
 })

 router.put("/updateVehicle/:vechileNumber",async (req,res)=>{


    let updated = await updateVehicle(req.params.vechileNumber,req.body)

    res.status(200).send(updated)

})
router.get("/getOrders",async (req,res)=>{


    let Order = await getAllOrders()
 
    res.status(200).send(Order)
 
 })

 router.post("/addDeliveryOrders", async (req, res) => {

    try{

        let deliveryOrder = req.body

        

        deliveryOrder = createDeliveryOrders(deliveryOrder)

        if(deliveryOrder) {
            res.status(201).send(deliveryOrder);
        } else {
            res.status(502).json({error:"Could not assign vehicle"});
        }
    } catch (err) {
        console.log(err);
    }
});

router.put("/updateStatus/:_id",async (req,res)=>{


    let updated = await updateStatus(req.params._id,req.body)
    
    
    res.status(200).send(updated)

})
router.get("/getD_Orders",async (req,res)=>{


    let Order = await getAll_DOrders()
 
    res.status(200).send(Order)
 
 })

module.exports = router;