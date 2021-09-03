import React, { useEffect, useState } from "react";
import StockRequestModal from "../modals/StockRequestModal";

const StockRequestItem = (props) => {
  const { productID, productName, sizes, status } = props.stockRequest;
  const productCode = productID.substring(17, 23).toUpperCase();
  const view = props.view;

  return (
    <>
      {/* Web view */}
      {view === "web" && (
        <div className="flex justify-center">
          <div className="grid gap-5 grid-cols-4 sm:grid-cols-4 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <div className="pt-4 pb-4 m-auto">{productCode}</div>
            <div className="pt-4 pb-4 m-auto">{productName}</div>
            <div className="pt-4 pb-4 m-auto">
              {sizes.xs && <p>XS - {sizes.xs}</p>}
              {sizes.s && <p>S - {sizes.s}</p>}
              {sizes.m && <p>M - {sizes.m}</p>}
              {sizes.l && <p>L - {sizes.l}</p>}
              {sizes.xl && <p>XL - {sizes.xl}</p>}
            </div>
            <div className="pt-4 pb-4 m-auto">{status}</div>
          </div>
        </div>
      )}

      {/* mobile view */}
      {view === "mobile" && (
        <div className="flex justify-center">
          <div className="grid gap-5 text-center grid-cols-1 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40">
            <div className="mt-2 pt-1 pb-1 m-auto">
              <div className="">PRODUCT CODE</div>
              <div className="text-xs">P001</div>
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
              <div className="text-xs">1</div>
            </div>
            <div className="pt-1 pb-1 m-auto">
              <div className="">AVAILABLE QUANTITY</div>
              <div className="text-xs">1</div>
            </div>
            <div className="pt-1 pb-1 m-auto">
              <div className="">RE-ORDER QUANTITY</div>
              <div className="text-xs">asda</div>
            </div>
            <div className="flex-row mx-auto justify-center pt-4 pb-4">
              <button className="p-2 pr-4 pl-4 mb-3 w-full rounded-md bg-blue-600">
                <i className="fa fa-paper-plane mr-3"></i>RE-ORDER
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StockRequestItem;
