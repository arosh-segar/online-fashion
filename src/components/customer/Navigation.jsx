import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/navigation.css";
import swal from "sweetalert";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };

    let customer = localStorage.getItem("customer");
    customer = JSON.parse(customer);
    if (customer) this.state.email = customer.email;
  }

  handleLogout = () => {
    localStorage.clear();
    swal({
      title: "You have logged out Successfully!",
      text: "",
      icon: "success",
    }).then(() => {
      window.location = `/customer`;
    });
  };

  // Navigation bar for customer

  render() {
    return (
      <div className="SPM-navbar">
        <Link to={"/customer"}>Home</Link>

        <Link to={"/customer/registration"}>Registration</Link>

        <Link to={"/customer/products"}>Products</Link>

        <Link to={"/customer/cart"}>
          <i class="w3-xxlarge fa fa-shopping-cart"></i>
        </Link>

        <Link to={"/customer/orders"}>My Orders</Link>

        {this.state.email == "" && <Link to={"/customer/login"}>Login</Link>}

        {this.state.email != "" && (
          <Link>
            <button onClick={this.handleLogout}>Logout</button>
          </Link>
        )}
      </div>
    );
  }
}
