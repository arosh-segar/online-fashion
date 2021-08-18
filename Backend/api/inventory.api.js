const { saveStock } = require("../dal/stock.dao");

const createStock = async ({
  productName,
  productType,
  productCategory,
  pricePerUnit,
  sizes,
  reorderQty,
  productImageUrl,
}) => {
  const inventory = {
    productName,
    productType,
    productCategory,
    pricePerUnit,
    sizes,
    reorderQty,
    productImageUrl,
  };

  return await saveStock(inventory);
};

module.exports = { createStock };
