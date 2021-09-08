import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import Clip from "../loaders/Clip";
import StockRequestItem from "./StockRequestItem";

const StockRequests = () => {
  const [stockRequests, setStockRequests] = useState([]);
  const [isStockLoading, setIsStockLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    axios
      .get(`${API_URL}/inventory/stockRequests`)
      .then((response) => {
        setStockRequests(response.data);
        setIsStockLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:block pt-10 pb-32 h-screen">
        <div className="">
          <div className="flex justify-center">
            <div className="flex justify-center sm:w-11/12 lg:w-10/12">
              <label className="mr-5 my-auto">STATUS : </label>
              <select
                className="p-2 border border-none w-2/4 rounded-lg"
                style={{ textAlignLast: "center" }}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-4 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">PRODUCT CODE</div>
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">REQUESTED QUANTITY</div>
              <div className="p-3">STATUS</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >
          {isStockLoading && (
            <>
              <Clip />
            </>
          )}

          {filterStatus === "all" ? (
            <>
              {stockRequests.map((stockRequest) => (
                <StockRequestItem
                  key={stockRequest._id}
                  stockRequest={stockRequest}
                  view="web"
                />
              ))}
            </>
          ) : (
            <>
              {stockRequests.map((stockRequest) => (
                <>
                  {stockRequest.status === filterStatus && (
                    <StockRequestItem
                      key={stockRequest._id}
                      stockRequest={stockRequest}
                      view="web"
                    />
                  )}
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockRequests;
