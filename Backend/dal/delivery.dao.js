let delivery = null;
const ObjectID = require("mongodb").ObjectId;

setTimeout(() => {
  stock = require("../utils/connection")
    .db("OnlineFashionDB")
    .collection("delivery");
}, 10000);

//Add vehicle to the database
const saveVehicle = async ({
  vechileName,
  vechileBrand,
  driverName,
}) => {
  const result = await delivery.insertOne({
    vechileName,
    vechileBrand,
    driverName,
  });
  return result.ops[0];
};

module.exports = { saveVehicle };