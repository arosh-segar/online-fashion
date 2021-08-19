const {
  saveStock,
  getAllStocks,
  deleteStockById,
} = require("../dal/stock.dao");

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

//retrieving the details of all stocks from the dal
const getStocks = async () => {
  return await getAllStocks();
};

//passing the item id of the item that need to deleted
const deleteStock = async (id) => {
  return await deleteStockById(id);
};

module.exports = { createStock, getStocks, deleteStock };
