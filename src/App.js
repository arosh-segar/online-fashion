import "./index.css";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Login from "./components/Login";
import SupplierDashboard from './components/supplier/SupplierDashboard'

function App() {
  return (
    <Router>
         <SupplierDashboard/>
    </Router>
  );
}

export default App;
