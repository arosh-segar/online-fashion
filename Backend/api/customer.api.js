const { createOrder } = require("../dal/customer.dao");

const saveOrder = async (order) => {
  const newOrder = order;

  return await createOrder(newOrder);
};

module.exports = {
  saveOrder,
};
