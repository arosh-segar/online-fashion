import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const DeleteInventoryModal = (props) => {
  const { onCloseDeleteModal, openDelete, productCode } = props;
  return (
    <div>
      <Modal open={openDelete} onClose={onCloseDeleteModal} center>
        <div className="p-5 w-200 md:w-full">
          <h2 className="text-center font-semibold font-sans">Delete Stock</h2>
          <p className="text-center mt-5">
            Are you sure you want to delete {productCode}?
          </p>
          <div className="text-white flex justify-center items-center mt-10">
            <button
              className="py-2 px-10 rounded-md bg-blue-500 mr-5"
              onClick={() => props.deleteStock(props.id)}
            >
              Yes
            </button>
            <button
              className="py-2 px-10 rounded-md bg-red-500"
              onClick={onCloseDeleteModal}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteInventoryModal;
