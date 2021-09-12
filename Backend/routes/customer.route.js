const router = require("express").Router();
const { saveOrder, getStocks, getOrders } = require("../api/customer.api");

// --------------------------- ORDER ------------------------------
router.post("/create-order", async (req, res) => {
  let order = req.body;

  order = saveOrder(order);

  if (order) {
    res.status(201).send(order);
  } else {
    res.status(502).json({ error: "Order could not be placed!" });
  }
});

// ----------------------- STOCK ------------------------------------
router.get("/get-all-products", async (req, res) => {
  let stocks = await getStocks();

  if (stocks) {
    res.status(201).send(stocks);
  } else {
    res.status(502).send("Error");
  }
});

// Retrieve customer specific all orders placed
router.get("/get-all-orders/:email", async (req, res) => {
  let orders = await getOrders(req.params.email);

  if (orders) {
    res.status(201).send(orders);
  } else {
    res.status(502).json("Could not find orders");
  }
});

module.exports = router;
