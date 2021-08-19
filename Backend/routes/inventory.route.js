const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const { createStock, getStocks, deleteStock } = require("../api/inventory.api");

//create a stock
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

//retrieve all the stocks from the database
router.get("/", async (req, res) => {
  let stocks = await getStocks();

  if (stocks) {
    res.status(201).send(stocks);
  } else {
    res.status(502).send("Error");
  }
});

//delete a particular item with a given item id
router.delete("/:id", async (req, res) => {
  let stock = await deleteStock(req.params.id);

  if (stock) {
    res.status(201).send("deleted");
  } else {
    res.status(502).json({ error: "Item wasn't deleted" });
  }
});

module.exports = router;
