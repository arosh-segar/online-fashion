let stockRequest = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(() => {
  stockRequest = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("stockRequest");
}, 10000);

//Add stock request to the database
const saveStockRequest = async ({ productID, productName, sizes, status }) => {
  const result = await stockRequest.insertOne({
    productID,
    productName,
    sizes,
    status,
  });
  return result;
};

//retrieving all the stock requests records from the db
const getAllStockRequests = async () => {
  const results = await stockRequest.find({});
  return results.toArray();
};

module.exports = { saveStockRequest, getAllStockRequests };
