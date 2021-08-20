const { saveVehicle } = require("../dal/delivery.dao");

const createVehicle = async ({
    vechileName,
    vechileBrand,
    driverName,
}) => {
  const vehicle = {
    vechileName,
    vechileBrand,
    driverName,
  };

  return await saveVehicle(vehicle);
};

module.exports = { createVehicle };