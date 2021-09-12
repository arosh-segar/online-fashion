let order = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(async () => {
  order = await require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("order");
}, 3000);

const createOrder = async (orderObject) => {
  const result = await order.insertOne(orderObject);
  return result;
};

module.exports = {
  createOrder,
};
