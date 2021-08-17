import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Stocks from "./components/inventory/Stocks";
import Products from "./components/Products";
import Counter from "./components/Counter";
import Product from "./components/Product";
import ReorderStocks from "./components/inventory/ReorderStocks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
import AddStock from "./components/inventory/AddStock";
import SupplieNavBar from "./components/supplier/SupplierNavBar"
import AddSupplier from "./components/supplier/AddSupplier"
import Suppliers from "./components/supplier/Suppliers"


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
       <SupplieNavBar/>
       <Switch>
       <Route exact path={"/"}>
            <Suppliers />
          </Route>
        
      </Switch> 

      </body>
    </Router>
  );
}

export default App;
