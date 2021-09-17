let order = null;
let customer = null;
let stock = null;

const ObjectID = require("mongodb").ObjectId;

setTimeout(async () => {
  order = await require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("order");

  customer = await require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("customer");

  stock = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("stock");
}, 3000);

// ---------------------- CUSTOMER COLLECTION ----------------------------------
// Customer Registration
const createCustomer = async (customerObject) => {
  const result = await order.insertOne(customerObject);
  return result;
};

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

// Edit Order - customers edit the quantity of products they have ordered
const editOrder = async (id, editOrderObject) => {
  // return await upload.updateOne({"_id":ObjectID(id)}, {$set: {status:status, reviewerID:reviewerID}})

  return await order.updateOne(
    { _id: ObjectID(id) },
    {
      $set: {
        purchaseDate: editOrderObject.purchaseDate,
        products: editOrderObject.products,
        totalBillAmount: editOrderObject.totalBillAmount,
        status: editOrderObject.status,
        customerEmail: editOrderObject.customerEmail,
        deliveryAddress: editOrderObject.deliveryAddress,
      },
    }
  );
};

// DELETE ORDER PLACED BY CUSTOMER
const deleteOrder = async (id) => {
  return await order.deleteOne({ _id: ObjectID(id) });
};

// Retrieve Products to purchase
const getAllStocks = async () => {
  const results = await stock.find({});
  return results.toArray();
};

module.exports = {
  createCustomer,
  createOrder,
  editOrder,
  deleteOrder,
  getAllOrders,
  getAllStocks,
};
