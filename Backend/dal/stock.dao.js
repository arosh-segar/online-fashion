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
  productImageUrl,
}) => {
  const sizesupdated = {
    xs: {
      isAvailable: sizes?.xs?.xsSizeAvailableQty ? true : false,
      xsSizeAvailableQty: sizes?.xs?.xsSizeAvailableQty
        ? Number(sizes.xs.xsSizeAvailableQty)
        : 0,
    },
    s: {
      isAvailable: sizes?.s?.sSizeAvailableQty ? true : false,
      sSizeAvailableQty: sizes?.s?.sSizeAvailableQty
        ? Number(sizes.s.sSizeAvailableQty)
        : 0,
    },
    m: {
      isAvailable: sizes?.m?.mSizeAvailableQty ? true : false,
      mSizeAvailableQty: sizes?.m?.mSizeAvailableQty
        ? Number(sizes.m.mSizeAvailableQty)
        : 0,
    },
    l: {
      isAvailable: sizes?.l?.lSizeAvailableQty ? true : false,
      lSizeAvailableQty: sizes?.l?.lSizeAvailableQty
        ? Number(sizes.l.lSizeAvailableQty)
        : 0,
    },
    xl: {
      isAvailable: sizes?.xl?.xlSizeAvailableQty ? true : false,
      xlSizeAvailableQty: sizes?.xl?.xlSizeAvailableQty
        ? Number(sizes.xl.xlSizeAvailableQty)
        : 0,
    },
  };

  const result = await stock.insertOne({
    productName,
    productType,
    productCategory,
    pricePerUnit: Number(pricePerUnit),
    sizes: sizesupdated,
    reorderQty: Number(reorderQty),
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
  const sizesupdated = {
    xs: {
      isAvailable: sizes?.xs?.xsSizeAvailableQty ? true : false,
      xsSizeAvailableQty: sizes?.xs?.xsSizeAvailableQty
        ? Number(sizes.xs.xsSizeAvailableQty)
        : 0,
    },
    s: {
      isAvailable: sizes?.s?.sSizeAvailableQty ? true : false,
      sSizeAvailableQty: sizes?.s?.sSizeAvailableQty
        ? Number(sizes.s.sSizeAvailableQty)
        : 0,
    },
    m: {
      isAvailable: sizes?.m?.mSizeAvailableQty ? true : false,
      mSizeAvailableQty: sizes?.m?.mSizeAvailableQty
        ? Number(sizes.m.mSizeAvailableQty)
        : 0,
    },
    l: {
      isAvailable: sizes?.l?.lSizeAvailableQty ? true : false,
      lSizeAvailableQty: sizes?.l?.lSizeAvailableQty
        ? Number(sizes.l.lSizeAvailableQty)
        : 0,
    },
    xl: {
      isAvailable: sizes?.xl?.xlSizeAvailableQty ? true : false,
      xlSizeAvailableQty: sizes?.xl?.xlSizeAvailableQty
        ? Number(sizes.xl.xlSizeAvailableQty)
        : 0,
    },
  };

  const result = await stock.replaceOne(
    { _id: ObjectID(id) },
    {
      productName,
      productType,
      productCategory,
      pricePerUnit: Number(pricePerUnit),
      sizes: sizesupdated,
      reorderQty: Number(reorderQty),
      productImageUrl,
    }
  );
  return result;
};

const editStockQuantityById = async (id, sizes) => {
  const xs = !sizes.xs ? 0 : sizes.xs;
  const s = !sizes.s ? 0 : sizes.s;
  const m = !sizes.m ? 0 : sizes.m;
  const l = !sizes.l ? 0 : sizes.l;
  const xl = !sizes.xl ? 0 : sizes.xl;

  const sizesQuantity = {
    xs,
    s,
    m,
    l,
    xl,
  };
  return await stock.updateOne(
    { _id: ObjectID(id) },
    {
      $inc: {
        "sizes.xs.xsSizeAvailableQty": sizesQuantity.xs,
        "sizes.s.sSizeAvailableQty": sizesQuantity.s,
        "sizes.m.mSizeAvailableQty": sizesQuantity.m,
        "sizes.l.lSizeAvailableQty": sizesQuantity.l,
        "sizes.xl.xlSizeAvailableQty": sizesQuantity.xl,
      },
    }
  );
};

module.exports = {
  saveStock,
  getAllStocks,
  deleteStockById,
  updateStockById,
  editStockQuantityById,
};
