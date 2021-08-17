const Express = require("express");
const cors = require("cors");

//const SupplierRoutes = require("./routes/supplier.route");
const InventoryRoutes = require("./routes/inventory.route");
//const DeliveryRoutes = require("./routes/delivery.route");

require("./utils/connection");

const app = new Express();

app.use(cors());
app.use(Express.json());

//app.use("/supplier", SupplierRoutes);
app.use("/inventory", InventoryRoutes);
//app.use("/delivery", DeliveryRoutes);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Backend Service is running on port 5000...");
});
