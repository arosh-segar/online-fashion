import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";
import axios from "axios";
import swal from "sweetalert";
import OrderItem from "./OrderItem";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../styles/customerStyles.css";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [netTotal, setNetTotal] = useState(0.0);
  const [filterCategory, setFilterCategory] = useState("all");
  const [orderSummaryType, setOrderSummaryType] = useState("overall");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let customer = localStorage.getItem("customer");
    let customerEmail = "";

    if (customer) {
      customer = JSON.parse(customer);
      customerEmail = customer.email;
    }

    if (customerEmail != "") {
      axios
        .get(`${API_URL}/customer/get-all-orders/${customerEmail}`)
        .then((response) => {
          setOrders(response.data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });

      let tot = 0.0;
      orders.map((item) => {
        tot = tot + item.totalBillAmount;
      });
      setNetTotal(tot);
    }

    if (customerEmail == "") {
      swal({
        title: "You need to Login to view your orders!",
        text: "",
        icon: "warning",
      });
    }
  }, []);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="bg-blue-300">
      <div className="hidden sm:block pt-10 pb-32 h-screen ">
        <div className="">
          <div className="mx-10">
            <div className="flex mx-80 sm:w-11/12 lg:w-10/12">
              <label className="mr-5 my-auto italic">
                Filter By Order Status :{" "}
              </label>
              <select
                className="p-2 border-2 border-blue-800 w-2/4 rounded-lg"
                style={{
                  textAlignLast: "center",
                  textAlign: "center",
                  backgroundColor: "white",
                  width: "500px",
                }}
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

          {/* ORDER MODAL POP-UP FOR SELECTING TYPE OF ORDER REPORT */}
          <div>
            <div className="">
              <div className="flex sm:w-11/12 lg:w-10/12">
                <button
                  onClick={onOpenModal}
                  className="bg-blue-900 text-white px-5 py-3 rounded-lg ml-20 mr-5"
                >
                  <i className="fa fa-eye mr-3"></i>View Order Summary
                </button>

                <Modal
                  open={open}
                  onClose={onCloseModal}
                  center
                  classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                  }}
                >
                  <h2 className="text-center text-blue-900 text-3xl italic">
                    Generate Order Summary
                  </h2>
                  <br />
                  <br />
                  <br />
                  <div className="text-center">
                    <select
                      className="p-2 border w-2/4 rounded-lg text-center"
                      style={{
                        textAlignLast: "center",
                        textAlign: "center",
                        backgroundColor: "white",
                        width: "300px",
                        fontStyle: "italic",
                      }}
                      value={orderSummaryType}
                      onChange={(e) => setOrderSummaryType(e.target.value)}
                    >
                      <option value="overall">Overall Order Summary</option>
                      <option value="last-month">
                        Last Month Order Summary
                      </option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <br />
                  <Link
                    to={{
                      pathname: "order-summary",
                      state: {
                        netTotal: netTotal,
                        orderSummaryType: orderSummaryType,
                      },
                    }}
                    class="px-2 w-full py-2 pull-right text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-indigo-800 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none"
                  >
                    <i className="fa fa-eye mr-3"></i>View Order Summary
                  </Link>
                </Modal>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-8 sm:grid-cols-8 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">ORDER ID</div>
              <div className="p-3 hidden sm:block">PURCHASE DATE</div>
              {/* <div className="p-3">PRODUCT</div> */}
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">QUANTITY</div>
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
