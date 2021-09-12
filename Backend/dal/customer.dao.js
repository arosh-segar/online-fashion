let order = null;
let stock = null;

const ObjectID = require("mongodb").ObjectId;

setTimeout(async () => {
  order = await require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("order");

  stock = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("stock");
}, 3000);

// ----------------------------------- ORDER COLLECTION ------------------------

// Place a New Order
const createOrder = async (orderObject) => {
  const result = await order.insertOne(orderObject);
  return result;
};

// Retrieve All Orders placed by that customer
const getAllOrders = async (email) => {
  const results = await order.find({ customerEmail: email });
  return results.toArray();
};

// Retrieve Products to purchase
const getAllStocks = async () => {
  const results = await stock.find({});
  return results.toArray();
};

module.exports = {
  createOrder,
  getAllStocks,
  getAllOrders,
};
