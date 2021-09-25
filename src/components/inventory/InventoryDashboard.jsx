import React from "react";
import Stocks from "./Stocks";
import ReorderStocks from "./ReorderStocks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddStock from "./AddStock";
import StockRequests from "./StockRequests.jsx";
import StockReport from "./StockReport";
import InventoryNavbar from "./InventoryNavbar";

const InventoryDashboard = () => {
  return (
    <Router>
      <body
        className={
          window.location.pathname !== "/stockRequestsSummary"
            ? "bg-gradient-to-r from-blue-600 to-blue-400"
            : ""
        }
      >
        {window.location.pathname !== "/stockRequestsSummary" && (
          <InventoryNavbar />
        )}
        <Switch>
          <Route exact path={"/stock"}>
            <Stocks />
          </Route>
          <Route exact path={"/stock/addStock"}>
            <AddStock />
          </Route>
          <Route path={"/stock/reorder"}>
            <ReorderStocks />
          </Route>
          <Route path={"/stock/stockRequests"}>
            <StockRequests />
          </Route>
          <Route path={"/stock/stockRequestsSummary"}>
            <StockReport />
          </Route>
        </Switch>
      </body>
    </Router>
  );
};

export default InventoryDashboard;
