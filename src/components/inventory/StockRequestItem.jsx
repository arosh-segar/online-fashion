import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import StockRequestAcceptModal from "../modals/StockRequestAcceptModal";

const StockRequestItem = (props) => {
  const { productID, productName, sizes, requestID } = props.stockRequest;
  const productCode = productID.substring(17, 23).toUpperCase();
  const view = props.view;
  const [openRequestAccept, setOpenRequestAccept] = useState(false);
  /* Stock Request Accept Modal variables */
  const [status, setStatus] = useState(props.stockRequest.status);
  const onOpenRequestAcceptModal = () => setOpenRequestAccept(true);
  const onCloseRequestAcceptModal = () => setOpenRequestAccept(false);

  const handleAcceptRequest = () => {
    const stock = { productID, sizes, requestID };
    axios
      .put(`${API_URL}/inventory/stockRequestUpdate/${productID}`, stock)
      .then((response) => {
        setStatus("received");
        onCloseRequestAcceptModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Web view */}
      {view === "web" && (
        <div className="flex justify-center">
          <div className="grid grid-cols-5 my-auto sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <div className="pt-4 pb-4 m-auto">{productCode}</div>
            <div className="pt-4 pb-4 m-auto">{productName}</div>
            <div className="pt-4 pb-4 m-auto">
              {sizes.xs && <p>XS - {sizes.xs}</p>}
              {sizes.s && <p>S - {sizes.s}</p>}
              {sizes.m && <p>M - {sizes.m}</p>}
              {sizes.l && <p>L - {sizes.l}</p>}
              {sizes.xl && <p>XL - {sizes.xl}</p>}
            </div>
            <div
              className={`pt-4 pb-4 m-auto capitalize font-medium text-md ${
                status === "pending"
                  ? "text-yellow-300"
                  : status === "approved"
                  ? "text-green-300"
                  : status === "received"
                  ? "text-green-500"
                  : "text-blue-700"
              }`}
            >
              <i
                class={`${
                  status === "pending"
                    ? "fa fa-clock-o"
                    : status === "approved"
                    ? "fa fa-check-circle"
                    : status === "received"
                    ? "fa fa-check"
                    : "fa fa-archive"
                } -ml-2 mr-2`}
              ></i>
              {status}
            </div>
            <div className="pt-4 pb-4 mr-2 my-auto">
              <button
                onClick={onOpenRequestAcceptModal}
                disabled={status === "dispatched" ? false : true}
                className={`text-xs pt-2 pb-2 md:pt-4 md:pb-4 w-full md:w-10/12 rounded-md ${
                  status === "dispatched" ? "bg-blue-600" : "bg-gray-500"
                }`}
              >
                <i className="fa fa-check mr-3 transition duration-150 ease-in-out"></i>
                RECEIVE ORDER
              </button>
            </div>
            <StockRequestAcceptModal
              onCloseRequestAcceptModal={onCloseRequestAcceptModal}
              openRequestAccept={openRequestAccept}
              handleAcceptRequest={handleAcceptRequest}
            />
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
              <button
                disabled={status === "Dispatched" ? false : true}
                className={`p-2 pr-4 pl-4 mb-3 w-full rounded-md  ${
                  status === "Dispatched" ? "bg-blue-600" : "bg-gray-500"
                }`}
              >
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
