import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditOrder from "./EditOrder";
import OrderProductItem from "./OrderProductItem";

const OrderItem = (props) => {
  const {
    _id,
    purchaseDate,
    products,
    totalBillAmount,
    status,
    customerEmail,
  } = props.orderItem;
  const orderItem = props.orderItem;
  const orderID = _id.substring(20).toUpperCase();
  const [orderEdit, setOrderEdit] = useState("");

  // console.log("orderitm: ", props.orderItem);

  return (
    <div>
      <div className="flex justify-center font-medium">
        <div className="grid gap-5 grid-cols-8 sm:grid-cols-8 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
          <div className="pt-4 pb-4 m-auto text-gray-900">{orderID}</div>
          <div className="pt-4 pb-4 m-auto text-gray-900">{purchaseDate}</div>
          <div className="pt-4 pb-4 m-auto hidden sm:block">
            {products.map((product) => (
              <OrderProductItem
                key={product._id}
                product={product}
                status={"name"}
              />
            ))}
          </div>
          <div className="pt-4 pb-4 m-auto text-center font-normal">
            {products.map((product) => (
              <OrderProductItem
                key={product._id}
                product={product}
                status={"qty"}
              />
            ))}
          </div>
          <div className="pt-4 pb-4 m-auto text-gray-900">
            {totalBillAmount}
          </div>
          <div className="pt-4 pb-4 m-auto text-gray-900">{status}</div>
          <div className="flex flex-col justify-center items-center mr-2">
            <button
              className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600"
              onClick={() => {
                if (status === "pending") {
                  setOrderEdit("edit");
                } else alert("You cannot edit as the order is confirmed!");
              }}
            >
              <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
              EDIT
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mr-2">
            <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-2 sm:pl-2 sm:pb-2 w-full rounded-md bg-red-600">
              <i className="fa fa-trash mr-1 md:mr- transition duration-150 ease-in-out"></i>
              DELETE
            </button>
          </div>
          {
            orderEdit === "edit" && (
              // products.map((item) => (
              // <EditOrder key={_id} orderItem={orderItem} />
              <Link
                class="px-2 w-full py-2 text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none"
                to={{
                  pathname: "/customer/edit-order",
                  state: {
                    orderItem: orderItem,
                  },
                }}
              >
                View Order to Edit
              </Link>
            )
            // ))
          }
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
