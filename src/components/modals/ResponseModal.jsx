import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ResponseModal = (props) => {
  const { heading, text, color, openResponse, onCloseResponseModal } = props;
  return (
    <div>
      <Modal open={openResponse} onClose={onCloseResponseModal} center>
        <div className="p-5 w-200 md:w-full">
          <h2 className="text-center font-semibold font-sans">{heading}</h2>
          <p className="text-center mt-5">{text}</p>
          <div className="text-white flex justify-center items-center mt-10">
            <button
              style={{ backgroundColor: color }}
              className="py-2 px-10 rounded-md"
              onClick={onCloseResponseModal}
            >
              Ok
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResponseModal;
