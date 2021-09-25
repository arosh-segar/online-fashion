import { Switch, Route,Redirect } from "react-router-dom";
import SupplierNavBar from "./SupplierNavBar"
import Suppliers from "./Suppliers"
import PurchaseOrders from "./PurchaseOrders";
import StockRequests from "./StockRequests"
import OrderReport from './OrderReport'

function SupplierDashboard() {
    return (
      <div>
          <body className="bg-gradient-to-r from-blue-600 to-blue-400">
            <SupplierNavBar/>
            <Switch>
                <Route exact path={"/supplier"} component={Suppliers}/>
                <Route exact path={"/supplier/orders"} component={PurchaseOrders}/>
                <Route exact path={"/supplier/stockRequests"} component={StockRequests}/>
                <Route exact path={"/supplier/orderReport/:id"} component={OrderReport}/>
            </Switch>
            </body>
      </div>
    );
}

export default SupplierDashboard;
