import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import OrderItem from "./OrderItem";

const OrdersList = () => {
  const [stocks, setStocks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    let email = "vinayagar@gmail.com";

    axios
      .get(`${API_URL}/customer/get-all-orders/${email}`)
      .then((response) => {
        setOrders(response.data);
        console.log("response:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("fil: ", filterCategory);
  }, []);

  return (
    <div>
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
                <option value="pending">My Pending Orders</option>
                <option value="confirmed">My Confirmed Orders</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-8 sm:grid-cols-8 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">ORDER ID</div>
              <div className="p-3 hidden sm:block">PURCHASE DATE</div>
              {/* <div className="p-3">PRODUCT</div> */}
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">PRODUCT QUANTITY</div>
              <div className="p-3">NET TOTAL</div>
              <div className="p-3">STATUS</div>
              <div className="p-3">EDIT</div>
              <div className="p-3">DELETE</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >
          {filterCategory === "all" ? (
            <>
              {orders.map((orderItem) => (
                <OrderItem key={orderItem._id} orderItem={orderItem} />
              ))}
            </>
          ) : (
            <>
              {orders.map((orderItem) => (
                <>
                  {orderItem.status === filterCategory && (
                    <OrderItem key={orderItem._id} orderItem={orderItem} />
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

export default OrdersList;
