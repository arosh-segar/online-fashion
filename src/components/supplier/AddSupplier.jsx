import React, {useState} from "react";
import axios from 'axios'
import {API_URL} from "../../constants";
import {Modal} from 'react-responsive-modal'
import ResponseModal from "../modals/ResponseModal";


const AddSupplier = (props) => {

    const {openAdd, onCloseAdd} = props
    const supplierID = props.id
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");

    const [openResponse, setOpenResponse] = useState(false);
    const onOpenResponseModal = () => setOpenResponse(true);
    const onCloseResponseModal = () => {
        setOpenResponse(false)
        onCloseAdd()
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const Supplier = {
            supplierID,
            name,
            address,
            phoneNo,
            email
        }

        axios.post(`${API_URL}/supplier/addSupplier`, Supplier)
            .then(response => {
                console.log(response.data)
                onOpenResponseModal()
            })
            .catch(e => {
                console.log(e.data)
            })


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
                                        value={supplierID}
                                        placeholder="S1"
                                        disabled={true}
                                        required
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
                                        placeholder="Deedat"
                                        onChange={e => {
                                            setName(e.target.value)
                                        }}
                                        required
                                    />
                                    {!name &&(
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>
                                    )}
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
                                        placeholder="No.01,Galle Road,Colombo-6"
                                        onChange={e => {
                                            setAddress(e.target.value)
                                        }}
                                        required
                                    />
                                    {!address &&(
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>
                                    )}
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
                                        title="Eg:0112212321/0776765557"
                                        placeholder="0112227086"
                                        onChange={e => {
                                            setPhoneNo(e.target.value)
                                        }}
                                        pattern="([0][0-9]{9})"
                                        maxLength={"10"}
                                        size="10"
                                        required
                                    />
                                    {!phoneNo &&(
                                        <p class="text-red-500 text-xs italic">
                                            Please fill out this field.
                                        </p>
                                    )}
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
                                        placeholder="lynx@gmail.com"
                                        title="Eg:lynx@gmail.com"
                                        onChange={e => {
                                            setEmail(e.target.value)
                                        }}
                                        required
                                    />
                                    {!email && (
                                    <p class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </p>
                                    )}
                                </div>
                            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                <button className={`w-full rounded-md p-2 mb-5 bg-blue-500`} type="submit">
                                    ADD SUPPLIER
                                </button>
                                <ResponseModal heading={'Add Supplier'} text={`You have successfully added the Supplier ${supplierID}`} color={'#4287f5'} openResponse={openResponse} onCloseResponseModal={onCloseResponseModal} />
                            </div>
                        </form>
                </div>
            </Modal>
        </div>


    );
};

export default AddSupplier;
