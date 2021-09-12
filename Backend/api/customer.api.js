const { createOrder, getAllStocks } = require("../dal/customer.dao");

// ---------------------------- ORDER COLLECTION -------------------------------------
const saveOrder = async (order) => {
  const newOrder = order;

  return await createOrder(newOrder);
};

// ------------------------- STOCK COLLECTION -----------------------------------
// Retrieving all the stocks available for sale from DB for cutomers to purchase
const getStocks = async () => {
  return await getAllStocks();
};

module.exports = {
  saveOrder,
  getStocks,
};
