let stockRequest = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(() => {
  stockRequest = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("stockRequest");
}, 3000);

//Add stock request to the database
const saveStockRequest = async ({
  productID,
  requestID,
  pricePerUnit,
  productName,
  sizes,
  status,
}) => {
  const result = await stockRequest.insertOne({
    productID,
    requestID,
    pricePerUnit,
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

const editRequestStatus = async (id, status) => {
  return await stockRequest.updateOne(
    { requestID: id },
    { $set: { status: status } }
  );
};

module.exports = { saveStockRequest, getAllStockRequests, editRequestStatus };
