import React, { useState } from "react";
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
  const orderID = _id.substring(20).toUpperCase();
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
            {/* {sizes.xs && <p>XS - {sizes.xs.xsSizeAvailableQty}</p>}
            {sizes.s && <p>S - {sizes.s.sSizeAvailableQty}</p>}
            {sizes.m && <p>M - {sizes.m.mSizeAvailableQty}</p>}
            {sizes.l && <p>L - {sizes.l.lSizeAvailableQty}</p>}
            {sizes.xl && <p>XL - {sizes.xl.xlSizeAvailableQty}</p>} */}
          </div>
          <div className="pt-4 pb-4 m-auto text-gray-900">
            {totalBillAmount}
          </div>
          <div className="pt-4 pb-4 m-auto text-gray-900">{status}</div>
          <div className="flex flex-col justify-center items-center mr-2">
            <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600">
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
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
