let stock = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(() => {
  stock = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("stock");
}, 10000);

//Add stock to the database
const saveStock = async ({
  productName,
  productType,
  productCategory,
  pricePerUnit,
  sizes,
  reorderQty,
  productImageUrl,
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
  return result.ops[0];
};

module.exports = { saveStock };
