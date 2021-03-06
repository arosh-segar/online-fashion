const Express = require("express");
const cors = require("cors");

const SupplierRoutes = require("./routes/supplier.route");
const InventoryRoutes = require("./routes/inventory.route");
const DeliveryRoutes = require("./routes/delivery.route");
const CustomerRoutes = require("./routes/customer.route");

require("./utils/connection");

const app = new Express();

let corsOptions = {
    origin:'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(Express.json());

app.use("/supplier", SupplierRoutes);
app.use("/inventory", InventoryRoutes);
app.use("/delivery", DeliveryRoutes);
app.use("/customer", CustomerRoutes);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Backend Service is running on port 5000...");
});
