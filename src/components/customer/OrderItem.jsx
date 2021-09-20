import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import swal from "sweetalert";

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

  // DELETE ORDER CONFIRMATION
  const confirmDelete = () => {
    swal({
      title: "Are you sure that you want to Delete your order ?",
      text: " ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${API_URL}/customer/delete-order/${_id}`)
          .then((response) => {
            swal("Your Order is Deleted Successfully!", "", "success");
            swal({
              title: "Your Order is Deleted Successfully!",
              text: "",
              icon: "success",
              timer: 3000,
            }).then(() => {
              window.location = `orders`;
            });
            // alert("Order Deleted Successfully!");
          })
          .catch((e) => {
            console.log("error", e.data);
            swal(
              "Error Occurred!",
              "Your order could not be deleted!",
              "error"
            );
            alert("Error occurred! Could not delete your order!");
          });
      } else {
        swal(
          "Your Order is SAFE and will be confirmed shortly!",
          "",
          "success"
        );
      }
    });
  };

  const displayError = () => {
    swal(
      "You cannot perform this action as your Order has been confirmed already!",
      "",
      "error"
    );
  };

  return (
    <div>
      <div className="flex justify-center font-medium ">
        <div className="grid gap-5 grid-cols-8 sm:grid-cols-8 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
          <div className="pt-4 pb-4 m-auto text-gray-900">{orderID}</div>
          <div className="pt-4 pb-4 m-auto text-gray-900">{purchaseDate}</div>
          {/* <div className="pt-4 pb-4 m-auto text-gray-900">
            {productName - productQty}
          </div> */}
          <div className="pt-4 pb-4 m-auto hidden sm:block">
            {products.map((product) => (
              <div className="pt-4 pb-4 m-auto text-gray-900">
                <div className="pt-4 pb-4 m-auto text-gray-900">
                  {product.productName}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 pb-4 m-auto text-center font-normal">
            {products.map((product) => (
              <div className="pt-4 pb-4 m-auto text-gray-900">
                {product.productQty.xs > 0 && (
                  <div>
                    <p>XS -{product.productQty.xs}</p>
                  </div>
                )}
                {product.productQty.s > 0 && (
                  <div>
                    <p>S -{product.productQty.s}</p>
                  </div>
                )}
                {product.productQty.m > 0 && (
                  <div>
                    <p>M -{product.productQty.m}</p>
                  </div>
                )}
                {product.productQty.l > 0 && (
                  <div>
                    <p>L -{product.productQty.l}</p>
                  </div>
                )}
                {product.productQty.xl > 0 && (
                  <div>
                    <p>XL -{product.productQty.xl}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-4 m-auto text-gray-900">
            {totalBillAmount}
          </div>
          {/* // DISPLAY STATUS AS CONFIRMED OR PENDING FOR ORDERS */}
          {/* <div className="pt-4 pb-4 m-auto text-gray-900">{status}</div> */}

          {/* STATUS DISPLAY */}
          {status === "confirmed" && (
            <div className="pt-4 pb-4 m-auto text-gray-900">
              <span class="bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-full">
                Confirmed
              </span>
            </div>
          )}

          {status === "pending" && (
            <div className="pt-4 pb-4 m-auto text-gray-900">
              <span class="bg-yellow-500 text-white text-center py-2 px-4 rounded-full">
                Pending
              </span>
            </div>
          )}

          {/* // EDIT BUTOON */}
          {status === "pending" && (
            <div className="flex flex-col justify-center items-center mr-2">
              <Link
                class="px-2 w-full py-2 text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none"
                to={{
                  pathname: "/customer/edit-order",
                  state: {
                    orderItem: orderItem,
                  },
                }}
              >
                <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                EDIT
              </Link>
            </div>
          )}
          {status !== "pending" && (
            <div className="flex flex-col justify-center items-center mr-2">
              <button
                className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-300"
                onClick={displayError}
              >
                <i className="fa fa-pencil mr-1 md:mr-3 opacity-75 transition duration-150 ease-in-out"></i>
                <i>EDIT</i>
              </button>
            </div>
          )}
          {status === "pending" && (
            <div className="flex flex-col justify-center items-center mr-2">
              <button
                class="px-2 w-full py-2 text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-red-500 rounded hover:bg-red-600 focus:bg-gray-400 focus:outline-none"
                onClick={confirmDelete}
              >
                <i className="fa fa-trash mr-1 md:mr- transition duration-150 ease-in-out"></i>
                DELETE
              </button>
            </div>
          )}
          {status !== "pending" && (
            <div className="flex flex-col justify-center items-center mr-2">
              <button
                className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-red-300"
                onClick={displayError}
              >
                <i className="fa fa-trash mr-1 md:mr- transition duration-150 ease-in-out"></i>
                <i> DELETE</i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
