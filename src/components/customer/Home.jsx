import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../Slideshow";
import "../../styles/home.css";
import men1 from "../../images/categories/men1.jpg";
import women2 from "../../images/categories/women2.jpg";
import boys1 from "../../images/categories/boys1.jpg";

export default class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="bg-blue-100">
        <Slideshow />

        <br />
        <br />
        <h2 className="text-center text-blue-900 text-5xl font-bold">
          LYNX SHOPPING
        </h2>
        <br />
        <p className="text-center text-xl">
          Online Clothing Store with Trendy Items and most loved products for
          Sale!{" "}
        </p>
        <p className="text-center text-xl">
          Welcome to LYNX Shopping, your number one source for all clothing
          items. We're dedicated to providing you the very best, with
        </p>

        <p className="text-center text-xl">
          an emphasis on Men's Wear, Women's Wear, Kid's Wear. Founded in 1990,
          LYNX Shopping has come a long way from its beginnings in Colombo.
        </p>
        <p className="text-center text-xl">
          {" "}
          We hope you enjoy our products as much as we enjoy offering them to
          you.
        </p>

        <section>
          <div class="px-5 sm:px-10 lg:px-20 py-10 lg:py-24 mx-auto">
            <h2 className="text-center text-blue-900 text-3xl font-bold">
              CATEGORIES
            </h2>
            <br />
            <br />
            <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 gap-y-10 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-4 lg:gap-x-5 lg:gap-y-10">
              <div class="max-w-xs w-full mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
                <img
                  class="bg-contain bg-center w-full h-50"
                  src={men1}
                  alt="Men's Wear"
                />
                <div className="bg-gray-900">
                  <div class="flex items-center justify-center px-4 py-2"></div>
                  <div class="flex items-center justify-between px-4 py-2">
                    <Link
                      class="px-2 w-full py-2 text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none"
                      to={"/customer/products"}
                    >
                      Mens' Wear
                    </Link>
                  </div>
                </div>
              </div>

              <div class="max-w-xs w-full mx-auto overflow-hidden bg-red-300 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
                <img
                  class="bg-contain bg-center w-full h-58"
                  src={women2}
                  alt="Women's Wear"
                />
                <div className="bg-gray-900 pb-2">
                  <div class="flex items-center justify-center px-4 py-2"></div>
                  <div class="flex items-center justify-between px-4 py-2">
                    <Link
                      class="px-2 w-full py-2 text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none"
                      to={"/customer/products"}
                    >
                      Womens' Wear
                    </Link>
                  </div>
                </div>
              </div>

              <div class="max-w-xs w-full mx-auto overflow-hidden bg-gray-300 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
                <img
                  class="bg-contain bg-center w-full h-50"
                  src={boys1}
                  alt="Boy's Wear"
                />
                <div className="bg-gray-900 pb-2">
                  <div class="flex items-center justify-center px-4 py-2"></div>
                  <div class="flex items-center justify-between px-4 py-2">
                    <Link
                      class="px-2 w-full py-2 text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none"
                      to={"/customer/products"}
                    >
                      Kids' Wear
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
