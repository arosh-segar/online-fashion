import React, { Component } from "react";
import "../styles/navigation.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SPM-navbar">
        <a href="/">Home</a>

        <div className="SPM-dropdown">
          <button className="SPM-dropbtn">MEN</button>
          <div className="SPM-dropdown-content">
            <a href="/create-vehicle">Add New Vehicle</a>
            <a href="/vehicle">View All Vehicles</a>
          </div>
        </div>

        <div className="SPM-dropdown">
          <button className="SPM-dropbtn">WOMEN</button>
          <div className="SPM-dropdown-content">
            <a href="/create-load">Add New Load</a>
            <a href="/load">View All Loads</a>
          </div>
        </div>

        <a href="/">KIDS</a>

        <a href="/">LOGOUT</a>

        <a href="/">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    );
  }
}
