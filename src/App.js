import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Stocks from "./components/inventory/Stocks";
import Products from "./components/Products";
import Counter from "./components/Counter";
import Product from "./components/Product";
import ReorderStocks from "./components/inventory/ReorderStocks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
import AddStock from "./components/inventory/AddStock";
import SupplieNavBar from "./components/supplier/SupplierNavBar";
import AddSupplier from "./components/supplier/AddSupplier";
import Suppliers from "./components/supplier/Suppliers";
import PurchaseOrders from "./components/supplier/PurchaseOrders";
import StockRequests from "./components/supplier/StockRequests";
import OrderReport from "./components/supplier/OrderReport";

function App() {
  return (
    <Router>
      <body className="bg-gradient-to-r from-blue-600 to-blue-400">
        {/* <Navbar />
        <Switch>
          <Route exact path={"/"}>
            <Stocks />
          </Route>
          <Route exact path={"/addStock"}>
            <AddStock />
          </Route>
          <Route path={"/reorder"}>
            <ReorderStocks />
          </Route>
          <Route path={"/products"}>
            <Product />
          </Route>
        </Switch> */}
        <SupplieNavBar />
        <Switch>
          <Route exact path={"/supplier"} component={Suppliers} />
          <Route exact path={"/supplier/orders"}>
            <PurchaseOrders />
          </Route>
          <Route exact path={"/supplier/stockRequests"}>
            <StockRequests />
          </Route>
          <Route
            exact
            path={"/supplier/orderReport/:id"}
            component={OrderReport}
          />
          <Redirect to={"/supplier"} />
        </Switch>
      </body>
    </Router>
  );
}

export default App;
