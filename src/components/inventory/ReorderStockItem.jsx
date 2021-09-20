import React, { useState } from "react";
import StockRequestModal from "../modals/StockRequestModal";

const ReorderStockItem = (props) => {
  const { _id, productName, sizes, reorderQty } = props.reorderStock;
  const length = props.length;
  const productCode = _id.substring(17, 23).toUpperCase();
  const view = props.view;
  /* Stock purchase Modal variables */
  const [openStockRequestModal, setOpenStockRequestModal] = useState(false);
  const onOpenStockRequestModal = () => setOpenStockRequestModal(true);
  const onCloseStockRequestModal = () => setOpenStockRequestModal(false);

  return (
    <>
      {/* Web view */}
      {view === "web" && (
        <div className="flex justify-center">
          <div className="grid grid-cols-5 my-auto sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <div className="pt-4 pb-4 m-auto">{productCode}</div>
            <div className="pt-4 pb-4 m-auto">{productName}</div>
            <div className="pt-4 pb-4 m-auto">
              {parseFloat(sizes.xs.xsSizeAvailableQty) <
                parseFloat(reorderQty) &&
                sizes.xs.isAvailable && (
                  <p>XS - {sizes.xs.xsSizeAvailableQty}</p>
                )}
              {parseFloat(sizes.s.sSizeAvailableQty) < parseFloat(reorderQty) &&
                sizes.s.isAvailable && <p>S - {sizes.s.sSizeAvailableQty}</p>}
              {parseFloat(sizes.m.mSizeAvailableQty) < parseFloat(reorderQty) &&
                sizes.m.isAvailable && <p>M - {sizes.m.mSizeAvailableQty}</p>}
              {parseFloat(sizes.l.lSizeAvailableQty) < parseFloat(reorderQty) &&
                sizes.l.isAvailable && <p>L - {sizes.l.lSizeAvailableQty}</p>}
              {parseFloat(sizes.xl.xlSizeAvailableQty) <
                parseFloat(reorderQty) &&
                sizes.xl.isAvailable && (
                  <p>XL - {sizes.xl.xlSizeAvailableQty}</p>
                )}
            </div>
            <div className="pt-4 pb-4 m-auto">{reorderQty}</div>
            <div className="pt-4 pb-4 mr-2 my-auto">
              <button
                onClick={onOpenStockRequestModal}
                className="text-xs pt-2 pb-2 md:pt-4 md:pb-4 w-full md:w-10/12 rounded-md bg-blue-600"
              >
                <i className="fa fa-paper-plane mr-3 transition duration-150 ease-in-out"></i>
                RE-ORDER
              </button>
              {/* Stock Request Modal component */}
              <StockRequestModal
                openStockRequestModal={openStockRequestModal}
                onCloseStockRequestModal={onCloseStockRequestModal}
                reorderStock={props.reorderStock}
                length={length}
              />
            </div>
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

export default ReorderStockItem;
