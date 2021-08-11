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

function App() {
  return (
    <Router>
      {/* <body className="bg-gradient-to-r from-blue-600 to-blue-400 sm:h-screen">
        <Navbar /> */}
      <Switch>
        <Route exact path={"/"}>
          <ShoppingCart />
        </Route>
        <Route path={"/reorder"}>
          <ReorderStocks />
        </Route>
        <Route path={"/products"}>
          <Product />
        </Route>
      </Switch>
      {/* </body> */}
    </Router>
  );
}

export default App;
