import "./index.css";
import Navbar from "./components/Navbar";
import Stocks from "./components/inventory/Stocks";
import ReorderStocks from "./components/inventory/ReorderStocks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import ShoppingCart from "./components/ShoppingCart";
import AddStock from "./components/inventory/AddStock";
import StockRequests from './components/inventory/StockRequests.jsx';
import StockReport from "./components/inventory/StockReport";


function App() {
  return (
    <Router>
      <body className="bg-gradient-to-r from-blue-600 to-blue-400">
        <Navbar />
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
          <Route path={"/stockRequests"}>
            <StockRequests />
          </Route>
        </Switch>
      </body>
    </Router>
  );
}

export default App;
