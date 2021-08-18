const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const { createStock } = require("../api/inventory.api");

//create a keynote speaker using the keynote speaker details that has been provided by the editor
router.post("/addStock", upload.single("productImage"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const {
      productName,
      productType,
      productCategory,
      pricePerUnit,
      sizes,
      reorderQty,
    } = req.body;

    let stock = await createStock({
      productName,
      productType,
      productCategory,
      pricePerUnit,
      sizes,
      reorderQty,
      productImageUrl: result.secure_url,
    });

    if (stock) {
      res.status(201).send(stock);
    } else {
      res.status(502).json({ error: "Stock wasn't added" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
