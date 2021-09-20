import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const StockRequestAcceptModal = (props) => {
  const { onCloseRequestAcceptModal, openRequestAccept, handleAcceptRequest } =
    props;
  return (
    <div>
      <Modal
        open={openRequestAccept}
        onClose={onCloseRequestAcceptModal}
        center
      >
        <div className="p-5 w-200 md:w-full">
          <h2 className="text-center font-semibold font-sans">
            Stock Request Accept
          </h2>
          <p className="text-center mt-5">Have you received these Stocks?</p>
          <div className="text-white flex justify-center items-center mt-10">
            <button
              className="py-2 px-10 rounded-md bg-blue-500 mr-5"
              onClick={handleAcceptRequest}
            >
              Yes
            </button>
            <button
              className="py-2 px-10 rounded-md bg-red-500"
              onClick={onCloseRequestAcceptModal}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StockRequestAcceptModal;
