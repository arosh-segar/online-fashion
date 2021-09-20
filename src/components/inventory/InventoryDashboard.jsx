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
          <Route path={"/stockRequestsSummary"}>
            <StockReport />
          </Route>
        </Switch>
      </body>
    </Router>
  );
};

export default InventoryDashboard;
