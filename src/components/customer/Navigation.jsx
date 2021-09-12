import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "../../styles/navigation.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
  }

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
      </div>
    );
  }
}
