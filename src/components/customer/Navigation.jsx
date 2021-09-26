import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/navigation.css";
import swal from "sweetalert";

export default class Navigation extends Component {
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
      <div className="bg-gray-900">
        <div>
          <ul class="flex bg-gray-900">
            <li class="flex-1 mr-2">
              <Link
                to={"/customer"}
                class="text-center font-sans text-white font-bold text-lg block rounded py-2 px-4 bg-gray-900 hover:bg-gray-100 hover:text-blue-900"
              >
                Home
              </Link>
            </li>
            {this.state.email == "" && (
              <li class="flex-1 mr-2">
                <Link
                  to={"/customer/registration"}
                  class="text-center font-sans text-white font-bold text-lg block rounded bg-gray-900 text-white hover:bg-gray-100 hover:text-blue-900 py-2 px-4"
                >
                  Register
                </Link>
              </li>
            )}

            <li class="flex-1 mr-2">
              <Link
                class="text-center font-sans text-white font-bold text-lg block rounded bg-gray-900 text-white hover:bg-gray-100 hover:text-blue-900 py-2 px-4"
                to={"/customer/products"}
              >
                Products
              </Link>
            </li>
            <li class="flex-1 mr-2">
              <Link
                class="text-center font-sans text-white font-bold text-lg block rounded bg-gray-900 text-white hover:bg-gray-100 hover:text-blue-900 py-2 px-1"
                to={"/customer/cart"}
              >
                <i class="w3-xxlarge fa fa-shopping-cart"></i>
              </Link>
            </li>
            <li class="flex-1 mr-2">
              <Link
                class="text-center font-sans text-white font-bold text-lg block rounded bg-gray-900 text-white hover:bg-gray-100 hover:text-blue-900 py-2 px-4"
                to={"/customer/orders"}
              >
                My Orders
              </Link>
            </li>

            {this.state.email == "" && (
              <li class="flex-1 mr-2">
                <Link
                  class="text-center font-sans text-white font-bold text-lg block rounded bg-gray-900 text-white hover:bg-gray-100 hover:text-blue-900 py-2 px-4"
                  to={"/customer/login"}
                >
                  Login
                </Link>
              </li>
            )}

            {this.state.email != "" && (
              <li class="flex-1 mr-2">
                <Link class="text-center font-sans text-white font-bold text-lg block rounded bg-gray-900 text-white hover:bg-gray-100 hover:text-blue-900 py-2 px-4">
                  <button onClick={this.handleLogout}>Logout</button>
                </Link>
              </li>
            )}

            <li class="text-center flex-1"></li>
          </ul>
        </div>
      </div>
    );
  }
}
