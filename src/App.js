import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import SupplierDashboard from "./components/supplier/SupplierDashboard";
import InventoryDashboard from "./components/inventory/InventoryDashboard"
import DeliveryDashboard from "./components/delivery/DeliveryDashboard";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path={"/"} component={Login}/>
            <Route exact path={"/supplier"} component={SupplierDashboard}/>
            <Route exact path={"/stock"} component={InventoryDashboard}/>
            <Route exact path={"/delivery"} component={DeliveryDashboard}/>
        </Switch>
    </Router>
  );
}

export default App;
