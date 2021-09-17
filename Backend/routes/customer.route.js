const router = require("express").Router();
const {
  saveCustomer,
  saveOrder,
  updateOrder,
  deleteOrderByID,
  getOrders,
  getStocks,
} = require("../api/customer.api");

// ------------------------CUSTOMER COLLECTION --------------------
router.post("/create-customer", async (req, res) => {
  let customer = req.body;

  customer = saveOrder(customer);

  if (customer) {
    res.status(201).send(customer);
  } else {
    res.status(502).json({ error: "Could not create a new account!" });
  }
});

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

// Retrieve customer specific all orders placed
router.get("/get-all-orders/:email", async (req, res) => {
  let orders = await getOrders(req.params.email);

  if (orders) {
    res.status(201).send(orders);
  } else {
    res.status(502).json("Could not find orders");
  }
});

// EDIT ORDER PLACED BY UPDATING THE QUANTITY OF PRODUCTS
router.put("/edit-order/:id", async (req, res) => {
  let result = await updateOrder(req.params.id, req.body);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(502).json("Could not edit order");
  }
});

// DELETE ORDER PLACED BY CUSTOMER
router.delete("/delete-order/:id", async (req, res) => {
  let result = await deleteOrderByID(req.params.id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(502).json("Could not delete order");
  }
});

// ----------------------- STOCK ------------------------------------
// Retrieve all products for sale and display to customer
router.get("/get-all-products", async (req, res) => {
  let stocks = await getStocks();

  if (stocks) {
    res.status(201).send(stocks);
  } else {
    res.status(502).send("Error");
  }
});

module.exports = router;
