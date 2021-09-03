import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import ReorderStockItem from "./ReorderStockItem";
import Clip from "../loaders/Clip";

const ReorderStocks = () => {
  const [reorderStocks, setReorderStocks] = useState([]);
  const [isStockLoading,setIsStockLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/inventory`)
      .then((response) => {
        setReorderStocks(
          response.data.filter(
            (stock) =>
              parseFloat(stock.sizes.xs.xsSizeAvailableQty) <
                parseFloat(stock.reorderQty) ||
              parseFloat(stock.sizes.s.sSizeAvailableQty) <
                parseFloat(stock.reorderQty) ||
              parseFloat(stock.sizes.m.mSizeAvailableQty) <
                parseFloat(stock.reorderQty) ||
              parseFloat(stock.sizes.l.lSizeAvailableQty) <
                parseFloat(stock.reorderQty) ||
              parseFloat(stock.sizes.xl.xlSizeAvailableQty) <
                parseFloat(stock.reorderQty)
          )
        );

        setIsStockLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:block pt-10 h-screen">
        <div>
          <div className="flex justify-center ">
            <div className="flex justify-center sm:w-11/12 lg:w-10/12">
              <label className="mr-5 my-auto">RISK LEVEL : </label>
              <select
                className="p-2 border border-none w-2/4 rounded-lg"
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
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">PRODUCT CODE</div>
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">AVAILABLE QUANTITY</div>
              <div className="p-3">RE-ORDER QUANTITY</div>
              <div className="p-3">ACTIONS</div>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto pb-10" style={{ height: "70vh" }}>
          {isStockLoading &&
          <>
            <Clip />
          </>

          }
          {reorderStocks.map((reorderStock) => (
            <>
              <ReorderStockItem
                key={reorderStock._id}
                view="web"
                reorderStock={reorderStock}
              />
            </>
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
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReorderStocks;
