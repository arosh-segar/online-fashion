const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const { createVehicle } = require("../api/delivery.api");

router.post("/addVehicle", async (req, res) => {

    try{

        let vehicle = await addVehicle( {
            vechileName = req.body.vechileName,
            vechileBrand = req.body.vechileBrand,
            driverName = req.body.driverName
        });

        if(vehicle) {
            res.status(201).send(vehicle);
        } else {
            res.status(502).json({error:"Vehicle details could not be added"});
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;