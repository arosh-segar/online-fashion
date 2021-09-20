const {
  saveStock,
  getAllStocks,
  deleteStockById,
  updateStockById,
  editStockQuantityById,
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

//update api for stock
const modifyStock = async (
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
  const stock = {
    productName,
    productType,
    productCategory,
    pricePerUnit,
    sizes,
    reorderQty,
    productImageUrl,
  };

  return await updateStockById(id, stock);
};

const updateStockQuantity = async (id, sizes) => {
  return await editStockQuantityById(id, sizes);
};

module.exports = {
  createStock,
  getStocks,
  deleteStock,
  modifyStock,
  updateStockQuantity,
};
