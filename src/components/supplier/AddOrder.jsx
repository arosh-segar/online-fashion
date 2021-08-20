import React, {useState} from "react";
import axios from 'axios'
import {API_URL} from "../../constants";
import {Modal} from 'react-responsive-modal'


const AddOrder = (props) => {

    const {openAdd, onCloseAdd} = props
    const [suppliers,setSuppliers] = useState([101,102,103])
    const [requests,setRequests] = useState([11,21,22,32])



    const handleSubmit = (e) => {

        // e.preventDefault()
        //
        // const Order = {
        //
        // }

        // axios.post(`${API_URL}/supplier/addOrder`, Order)
        //     .then(response => {
        //         console.log(response.data)
        //         onCloseAdd()
        //     })
        //     .catch(e => {
        //         console.log(e.data)
        //     })


    }


    return (
        <div>
            <Modal open={openAdd} onClose={onCloseAdd} center>
                <div className="p-5 w-250 md:w-500">
                    <h2 className="text-center font-semibold font-sans">ADD SUPPLIER</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
                    >
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Supplier ID
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="S1"
                                onChange={e => {
                                    setSupplierID(e.target.value)
                                }}
                            />
                            <p class="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        {/* Name */}
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                for="grid-first-name"
                            >
                                Name
                            </label>
                            <select
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Deedat"
                                onChange={e => {
                                    setName(e.target.value)
                                }}
                            />
                            <p class="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <button className="w-full rounded-md p-2 mb-5 bg-blue-500" type="submit">
                                ADD SUPPLIER
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>


    );
};

export default AddSupplier;
