const {
  createOrder,
  getAllStocks,
  getAllOrders,
} = require("../dal/customer.dao");

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

// Retrieveing customer specific all orders placed
const getOrders = async (email) => {
  return await getAllOrders(email);
};

module.exports = {
  saveOrder,
  getStocks,
  getOrders,
};
