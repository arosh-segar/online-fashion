let stock = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(() => {
  stock = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("stock");
}, 3000);

//Add stock to the database
const saveStock = async ({
  productName,
  productType,
  productCategory,
  pricePerUnit,
  sizes,
  reorderQty,
  productImageUrl
}) => {
  const result = await stock.insertOne({
    productName,
    productType,
    productCategory,
    pricePerUnit,
    sizes,
    reorderQty,
    productImageUrl,
  });
  return result;
};

//retrieving all the stock records from the db
const getAllStocks = async () => {
  const results = await stock.find({});
  return results.toArray();
};

//deleting a particular item record from the db
const deleteStockById = async (id) => {
  return await stock.findOneAndDelete({ _id: ObjectID(id) });
};

//update stock details
const updateStockById = async (
  id,
  {
    productName,
    productType,
    productCategory,
    pricePerUnit,
    sizes,
    reorderQty,
    productImageUrl,
  }
) => {
  const result = await stock.replaceOne(
    { _id: ObjectID(id) },
    {
      productName,
      productType,
      productCategory,
      pricePerUnit,
      sizes,
      reorderQty,
      productImageUrl,
    }
  );
  return result;
};

module.exports = { saveStock, getAllStocks, deleteStockById, updateStockById };
