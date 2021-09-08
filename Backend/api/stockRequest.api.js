const {
  saveStockRequest,
  getAllStockRequests,
} = require("../dal/stockRequest.dao");

const createStockRequest = async ({
  productID,
  requestID,
  productName,
  sizes,
  status,
}) => {
  const stockRequest = { productID, requestID, productName, sizes, status };
  return await saveStockRequest(stockRequest);
};

//retrieving the details of all stocks from the dal
const getStockRequests = async () => {
  return await getAllStockRequests();
};

module.exports = { createStockRequest, getStockRequests };
