const {
  createCustomer,
  getCustomer,
  createOrder,
  editOrder,
  deleteOrder,
  getAllOrders,
  getAllStocks,
} = require("../dal/customer.dao");

// CUSTOMER COLLECTION
const saveCustomer = async (customer) => {
  const newCustomer = customer;

  return await createCustomer(newCustomer);
};

const getCustomerByEmail = async (email) => {
  return await getCustomer(email);
};

// ---------------------------- ORDER COLLECTION -------------------------------------
const saveOrder = async (order) => {
  const newOrder = order;

  return await createOrder(newOrder);
};

// EDIT ORDER BY UPDATING QUANTITY OF PRODUCTS ORDERED
const updateOrder = async (id, order) => {
  return await editOrder(id, order);
};

// DELETE ORDER PLACED BY CUSTOMER
const deleteOrderByID = async (id) => {
  return await deleteOrder(id);
};

// Retrieveing customer specific all orders placed
const getOrders = async (email) => {
  return await getAllOrders(email);
};

// ------------------------- STOCK COLLECTION -----------------------------------
// Retrieving all the stocks available for sale from DB for cutomers to purchase
const getStocks = async () => {
  return await getAllStocks();
};

module.exports = {
  saveCustomer,
  getCustomerByEmail,
  saveOrder,
  updateOrder,
  deleteOrderByID,
  getOrders,
  getStocks,
};
