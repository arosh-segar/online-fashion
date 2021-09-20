import Vehicles from "./Vehicles";
import Orders from "./Orders"
import DeliveryOrders from "./DeliveryOrders";
import DeliveryReport from "./DeliveryReport";
import DeliveryNavBar from "./DeliveryNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




const DeliveryDashboard = () => {


 return (
     
      <body
        className={
          window.location.pathname !== "/delivery/deliveryReport"
            ? "bg-gradient-to-r from-blue-600 to-blue-400"
            : ""
        }
      >
        {window.location.pathname !== "/delivery/deliveryReport" && (
          < DeliveryNavBar />
        )}
        <Switch>
          <Router  exact path={"/delivery"}>

        <Vehicles/> 
          </Router>
          <Route  exact path={"/delivery/orderList"}>
             <Orders/> 
          </Route>
          <Route  exact path={"/delivery/deliveryList"}>
             <DeliveryOrders/> 
          </Route>
          

          <Route

            path={"/delivery/deliveryReport"}

            render={(props) => <DeliveryReport {...props} />}

          ></Route>
        </Switch>
      </body>
     
 
  );
}

export default DeliveryDashboard;

