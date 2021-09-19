import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { API_URL } from "../../constants";
import axios from "axios";
import ResponseModal from "../modals/ResponseModal";

const StockRequestModal = (props) => {
  const [checkXS, setCheckXS] = useState(false);
  const [checkS, setcheckS] = useState(false);
  const [checkM, setcheckM] = useState(false);
  const [checkL, setcheckL] = useState(false);
  const [checkXL, setcheckXL] = useState(false);
  const [xsRange, setXSRange] = useState(0);
  const [sRange, setSRange] = useState(0);
  const [mRange, setMRange] = useState(0);
  const [lRange, setLRange] = useState(0);
  const [xlRange, setXLRange] = useState(0);
  const { openStockRequestModal, onCloseStockRequestModal } = props;
  const reorderStock = props.reorderStock;
  const length = props.length;
  /* Response Modal variables */
  const [openResponse, setOpenResponse] = useState(false);
  const onCloseResponseModal = () => setOpenResponse(false);
  const refillReorder = () => {
    checkXS &&
      setXSRange(
        reorderStock.reorderQty - reorderStock.sizes.xs.xsSizeAvailableQty
      );

    checkS &&
      setSRange(
        reorderStock.reorderQty - reorderStock.sizes.s.sSizeAvailableQty
      );

    checkM &&
      setMRange(
        reorderStock.reorderQty - reorderStock.sizes.m.mSizeAvailableQty
      );

    checkL &&
      setLRange(
        reorderStock.reorderQty - reorderStock.sizes.l.lSizeAvailableQty
      );

    checkXL &&
      setXLRange(
        reorderStock.reorderQty - reorderStock.sizes.xl.xlSizeAvailableQty
      );
  };

  const generateID = () => {
    return `R${length + 1}${Math.floor(Math.random() * 10)}`;
  };

  const handleSubmit = () => {
    const stockRequest = {
      productID: reorderStock._id,
      requestID: generateID(),
      pricePerUnit: reorderStock.pricePerUnit,
      productName: reorderStock.productName,
      sizes: {
        xs: xsRange > 0 ? xsRange : null,
        s: sRange > 0 ? sRange : null,
        m: mRange > 0 ? mRange : null,
        l: lRange > 0 ? lRange : null,
        xl: xlRange > 0 ? xlRange : null,
      },
      status: "pending",
    };
    axios
      .post(`${API_URL}/inventory/addStockRequest`, stockRequest)
      .then((response) => {
        setOpenResponse(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal
      open={openStockRequestModal}
      onClose={onCloseStockRequestModal}
      center
    >
      <div className="p-5 w-200 md:w-500">
        <h2 className="text-center font-bold font-sans">Stock Request</h2>
        <p className="text-center mt-5">{reorderStock.productName}</p>
        <div className="flex flex-row justify-center items-center mt-5">
          {parseFloat(reorderStock.sizes.xs.xsSizeAvailableQty) <
            parseFloat(reorderStock.reorderQty) && (
            <label class="flex mx-2 items-center text-gray-700 font-semibold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                onClick={() => setCheckXS(!checkXS)}
                checked={checkXS}
              />
              <span class="text-sm">XS</span>
            </label>
          )}
          {parseFloat(reorderStock.sizes.s.sSizeAvailableQty) <
            parseFloat(reorderStock.reorderQty) && (
            <label class="flex mx-2 items-center text-gray-700 font-semibold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                onClick={() => setcheckS(!checkS)}
                checked={checkS}
              />
              <span class="text-sm">S</span>
            </label>
          )}
          {parseFloat(reorderStock.sizes.m.mSizeAvailableQty) <
            parseFloat(reorderStock.reorderQty) && (
            <label class="flex mx-2 items-center text-gray-700 font-semibold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                onClick={() => setcheckM(!checkM)}
                checked={checkM}
              />
              <span class="text-sm">M</span>
            </label>
          )}
          {parseFloat(reorderStock.sizes.l.lSizeAvailableQty) <
            parseFloat(reorderStock.reorderQty) && (
            <label class="flex mx-2 items-center text-gray-700 font-semibold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                onClick={() => setcheckL(!checkL)}
                checked={checkL}
              />
              <span class="text-sm">L</span>
            </label>
          )}
          {parseFloat(reorderStock.sizes.xl.xlSizeAvailableQty) <
            parseFloat(reorderStock.reorderQty) && (
            <label class="flex mx-2 items-center text-gray-700 font-semibold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                onClick={() => setcheckXL(!checkXL)}
                checked={checkXL}
              />
              <span class="text-sm">XL</span>
            </label>
          )}
        </div>
        <div class="w-full px-3 md:mb-0">
          {checkXS && (
            <div className="flex flex-row py-4 w-10/12 mx-auto">
              <div className="w-10/12 my-auto">
                <input
                  class="block w-full text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                  type="range"
                  min="1"
                  max="2000"
                  value={xsRange}
                  onChange={(e) => setXSRange(e.target.value)}
                  required
                />
              </div>
              <div className="w-2/12 my-auto text-right">
                <p>{xsRange}</p>
              </div>
            </div>
          )}
          {checkS && (
            <div className="flex flex-row py-4 w-10/12 mx-auto">
              <div className="w-10/12 my-auto">
                <input
                  class="block w-full text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                  type="range"
                  min="1"
                  max="2000"
                  value={sRange}
                  onChange={(e) => setSRange(e.target.value)}
                  required
                />
              </div>
              <div className="w-2/12 my-auto text-right">
                <p>{sRange}</p>
              </div>
            </div>
          )}
          {checkM && (
            <div className="flex flex-row py-4 w-10/12 mx-auto">
              <div className="w-10/12 my-auto">
                <input
                  class="block w-full text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                  type="range"
                  min="1"
                  max="2000"
                  value={mRange}
                  onChange={(e) => setMRange(e.target.value)}
                  required
                />
              </div>
              <div className="w-2/12 my-auto text-right">
                <p>{mRange}</p>
              </div>
            </div>
          )}
          {checkL && (
            <div className="flex flex-row py-4 w-10/12 mx-auto">
              <div className="w-10/12 my-auto">
                <input
                  class="block w-full text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                  type="range"
                  min="1"
                  max="2000"
                  value={lRange}
                  onChange={(e) => setLRange(e.target.value)}
                  required
                />
              </div>
              <div className="w-2/12 my-auto text-right">
                <p>{lRange}</p>
              </div>
            </div>
          )}
          {checkXL && (
            <div className="flex flex-row py-4 w-10/12 mx-auto">
              <div className="w-10/12 my-auto">
                <input
                  class="block w-full text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                  type="range"
                  min="1"
                  max="2000"
                  value={xlRange}
                  onChange={(e) => setXLRange(e.target.value)}
                  required
                />
              </div>
              <div className="w-2/12 my-auto text-right">
                <p>{xlRange}</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-white flex flex-col justify-center items-center mt-10">
          <button
            className="py-4 font-medium px-10 w-9/12 rounded-md bg-green-400"
            onClick={refillReorder}
          >
            REFILL STOCK TO RE-ORDER LEVEL
          </button>
          <button
            className="py-4 font-medium px-10 w-9/12 mt-5 rounded-md bg-blue-400"
            onClick={handleSubmit}
          >
            SEND STOCK REQUEST
          </button>
          <ResponseModal
            heading={"Stock Request"}
            text={`The stock request has been sent successfully`}
            color={"#4287f5"}
            openResponse={openResponse}
            onCloseResponseModal={onCloseResponseModal}
          />
        </div>
      </div>
    </Modal>
  );
};

export default StockRequestModal;
