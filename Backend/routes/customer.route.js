const router = require("express").Router();
const { saveOrder } = require("../api/customer.api");

router.post("/create-order", async (req, res) => {
  let order = req.body;

  order = saveOrder(order);

  res.status(200).send(order);
});

module.exports = router;
