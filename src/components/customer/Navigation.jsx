import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../../styles/navigation.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SPM-navbar">
        <Link to={"/"}>Home</Link>

        <Link to={"/registration"}>Registration</Link>

        <Link to={"/customer/products"}>Products</Link>

        <Link to={"/customer/cart"}>
          <i class="w3-xxlarge fa fa-shopping-cart"></i>
        </Link>
      </div>
    );
  }
}
