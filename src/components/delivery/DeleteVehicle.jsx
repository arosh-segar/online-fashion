import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const DeleteVehicle = (props) => {
    const { onCloseDelete, openDelete, onDeleteVehicle ,vechileNumber} = props;
    return (
        <div>
            <Modal open={openDelete} onClose={onCloseDelete} center>
                <div className="p-5 w-200 md:w-full">
                    <h2 className="text-center font-semibold font-sans">Delete Supplier</h2>
                    <p className="text-center mt-5">
                        Are you sure you want to delete {vechileNumber}?
                    </p>
                    <div className="text-white flex justify-center items-center mt-10">
                        <button
                            className="py-2 px-10 rounded-md bg-blue-500 mr-5"
                            onClick={()=>onDeleteVehicle(vechileNumber)}
                        >
                            Yes
                        </button>
                        <button
                            className="py-2 px-10 rounded-md bg-red-500"
                            onClick={onCloseDelete}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DeleteVehicle;
