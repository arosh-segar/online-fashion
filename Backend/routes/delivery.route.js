const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const { createVehicle,getAllVehicle,updateVehicle,deleteVehicle } = require("../api/delivery.api");

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

module.exports = router;