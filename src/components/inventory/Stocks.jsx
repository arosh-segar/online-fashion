import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import StockItem from "./StockItem";

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    axios
      .get(`${API_URL}/inventory`)
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deleteStock = (id) => {
    console.log(id);
    axios
      .delete(`${API_URL}/inventory/${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setStocks(stocks.filter((stock) => stock._id !== id));
  };

  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:block pt-10 pb-32 h-screen">
        <div className="">
          <div className="flex justify-center">
            <div className="flex justify-center sm:w-11/12 lg:w-10/12">
              <label className="mr-5 my-auto">CATEGORY : </label>
              <select
                className="p-2 border border-none w-2/4 rounded-lg"
                style={{ textAlignLast: "center" }}
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">PRODUCT CODE</div>
              <div className="p-3 hidden sm:block">PHOTO</div>
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">AVAILABLE QUANTITY</div>
              <div className="p-3">RE-ORDER QUANTITY</div>
              <div className="p-3">ACTIONS</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >
          {filterCategory === "all" ? (
            <>
              {stocks.map((stock) => (
                <StockItem
                  key={stock._id}
                  stock={stock}
                  view="web"
                  deleteStock={deleteStock}
                />
              ))}
            </>
          ) : (
            <>
              {stocks.map((stock) => (
                <>
                  {stock.productCategory === filterCategory && (
                    <StockItem
                      key={stock._id}
                      stock={stock}
                      view="web"
                      deleteStock={deleteStock}
                    />
                  )}
                </>
              ))}
            </>
          )}
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
                <option value="1">T-shirts</option>
                <option value="2">Trousers</option>
                <option value="3">Sports</option>
              </select>
            </div>
          </div>
          {stocks.map((stock) => (
            <StockItem
              key={stock._id}
              stock={stock}
              view="mobile"
              deleteStock={deleteStock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stocks;
