import React, { useState,useEffect } from "react";
import axios from 'axios'
import { API_URL } from "../../constants";
import {Modal} from 'react-responsive-modal'
import ResponseModal from "../modals/ResponseModal";

const EditSupplier = (props) => {

    const {openEdit,onCloseEdit} = props
    const [supplierID,setSupplierID] = useState(props.supplier.id);
    const [name, setName] = useState(props.supplier.name);
    const [address, setAddress] = useState(props.supplier.address);
    const [phoneNo, setPhoneNo] = useState(props.supplier.phoneNo);
    const [email, setEmail] = useState(props.supplier.email);
    const [openResponse, setOpenResponse] = useState(false);
    const onOpenResponseModal = () => setOpenResponse(true);
    const onCloseResponseModal = () => {
        setOpenResponse(false)
        onCloseEdit()
    }


    const handleSubmit = (e)=>{

        e.preventDefault()

        const supplier = {
            name,
            address,
            phoneNo,
            email
        }


        axios.put(`${API_URL}/supplier/updateSupplier/${supplierID}`,supplier)
            .then(response =>{
                onOpenResponseModal()
                supplier.id=supplierID
                props.onInputChange(supplier)
            })
            .catch(e=>{
                console.log(e.data)
            })


    }


    return (
        <div>
            <Modal open={openEdit} onClose={onCloseEdit}>
                <div className="p-5 w-250 md:w-500">
                    <h2 className="text-center font-semibold font-sans">EDIT SUPPLIER</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
                    >
                            {/* Supplier ID */}
                            <div class="w-full px-3 mt-10 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-first-name"
                                >
                                    Supplier ID
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    value={supplierID}
                                    disabled={true}
                                    onChange={e=>{setSupplierID(e.target.value)}}
                                />
                                {!supplierID &&(
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>)
                                }
                            </div>
                            {/* Name */}
                            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-first-name"
                                >
                                    Name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    value={name}
                                    onChange={e=>{setName(e.target.value)}}
                                />
                                {!name &&(
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>)
                                }
                            </div>
                            {/* Address */}
                            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-first-name"
                                >
                                    Address
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    value={address}
                                    onChange={e=>{setAddress(e.target.value)}}
                                />
                                {!address &&(
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>)
                                }
                            </div>
                            {/* PhoneNo */}
                            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-first-name"
                                >
                                    Phone No.
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    value={phoneNo}
                                    pattern="([0][0-9]{9})"
                                    maxLength={"10"}
                                    size="10"
                                    onChange={e=>{setPhoneNo(e.target.value)}}
                                />
                                {!phoneNo &&(
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>)
                                }
                            </div>
                            {/* Email */}
                            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-first-name"
                                >
                                    Email
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="email"
                                    value={email}
                                    onChange={e=>{setEmail(e.target.value)}}
                                />
                                {!email &&(
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>)
                                }
                            </div>
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <button className="w-full rounded-md p-2 mb-5 bg-blue-500" type ="submit" >
                                UPDATE SUPPLIER
                            </button>
                            <ResponseModal heading={'Edit Supplier'} text={`You have successfully updated the Supplier ${supplierID}`} color={'#4287f5'} openResponse={openResponse} onCloseResponseModal={onCloseResponseModal} />
                        </div>
                    </form>
            </div>
            </Modal>
        </div>



    );
};

export default EditSupplier;
