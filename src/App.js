import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import CustomerLogin from "./components/customer/CustomerLogin";
import SupplierDashboard from "./components/supplier/SupplierDashboard";
import InventoryDashboard from "./components/inventory/InventoryDashboard"
import DeliveryDashboard from "./components/delivery/DeliveryDashboard";
import CustomerDashboard from "./components/customer/CustomerDashboard";


function App() {
  return (
    <Router>
        <Switch>
            <Route path={"/login"}    component={Login}/>
            <Route path={"/supplier"} component={SupplierDashboard}/>
            <Route path={"/stock"}    component={InventoryDashboard}/>
            <Route path={"/delivery"} component={DeliveryDashboard}/>
            <Route path={"/customer"} component={CustomerDashboard}/>
        </Switch>
    </Router>
  );
}

export default App;
