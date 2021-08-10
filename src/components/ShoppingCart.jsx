import React, { useState } from "react";

const ShoppingCart = () => {
  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:block pt-10 bg-gradient-to-r from-gray-700 to-gray-600">
        <div style={{ maxHeight: "30vh" }}>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 font-semibold text-white sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm">
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">QUANTITY</div>
              <div className="p-3">PRICE</div>
              <div className="p-3">SIZES</div>
              <div className="p-3">TOTAL</div>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto pb-10" style={{ maxHeight: "70vh" }}>
          {[...Array(10)].map((element, i) => (
            <div className="flex justify-center">
              <div className="grid gap-5 grid-cols-5 sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-gray-300 shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                <div className="pt-4 pb-4 m-auto">P00{i + 1}</div>
                <div className="pt-4 pb-4 m-auto">PRODUCT {i + 1}</div>
                <div className="pt-4 pb-4 m-auto">{100 * (i + 10)}</div>
                <div className="pt-4 pb-4 mr-2">
                  <button className="text-xs pt-2 pb-2 md:pt-4 md:pb-4 w-full md:w-10/12 rounded-md bg-blue-600">
                    <i className="fa fa-eye mr-3 transition duration-150 ease-in-out"></i>
                    VIEW SIZES
                  </button>
                </div>
                <div className="pt-4 pb-4 m-auto">{100 * (i + 2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* small screens */}
      <div className="block sm:hidden mt-10">
        <div className="">
          <div className="flex justify-center">
            <div className="flex justify-center w-11/12">
              <select
                className="p-2 border border-none w-full rounded-lg"
                name="cars"
                id="cars"
                style={{ textAlignLast: "center" }}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>
          {[...Array(10)].map((element, i) => (
            <div className="flex justify-center">
              <div className="grid gap-5 text-center grid-cols-1 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40">
                <div className="mt-2 pt-1 pb-1 m-auto">
                  <div className="">PRODUCT CODE</div>
                  <div className="text-xs">P00{i + 1}</div>
                </div>
                <div className="pt-1 pb-1 m-auto hidden sm:block">
                  <img
                    className="rounded-lg h-20"
                    src="https://images.unsplash.com/photo-1525268499284-86ec700c826d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="No pic"
                  />
                </div>
                <div className="pt-1 pb-1 m-auto">
                  <div className="">PRODUCT NAME</div>
                  <div className="text-xs">PRODUCT {i + 1}</div>
                </div>
                <div className="pt-1 pb-1 m-auto">
                  <div className="">AVAILABLE QUANTITY</div>
                  <div className="text-xs">{100 * (i + 10)}</div>
                </div>
                <div className="pt-1 pb-1 m-auto">
                  <div className="">RE-ORDER QUANTITY</div>
                  <div className="text-xs">{100 * (i + 2)}</div>
                </div>
                <div className="flex-row mx-auto justify-center pt-4 pb-4">
                  <button className="p-2 pr-4 pl-4 mb-3 w-full rounded-md bg-blue-600">
                    <i className="fa fa-paper-plane mr-3"></i>RE-ORDER
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
