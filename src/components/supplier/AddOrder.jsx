import React, {useState,useEffect} from "react";
import axios from 'axios'
import {API_URL} from "../../constants";
import {Modal} from 'react-responsive-modal'
import Select from 'react-select'

const AddOrder = (props) => {

    const {openAdd, onCloseAdd} = props
    const [suppliers,setSuppliers] = useState([101,102,103])
    const [requests,setRequests] = useState([11,21,22,32])
    const [ss,setss] = useState(0)
    const [sr,setsr] = useState(0)

    console.log(ss)

    useEffect(() => {

    }, [suppliers]);


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

    const options =[
        {value:101,label:101},
        {value:102,label:102},
        {value:103,label:103},
    ]

    return (
        <div>
            <Modal open={openAdd} onClose={onCloseAdd} center>
                <div className="p-5 w-250 md:w-500">
                    <h2 className="text-center font-semibold font-sans">ADD ORDER</h2>
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
                            <Select
                                className="basic-multi-select appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                options={options}
                                onChange={ input=> {
                                    setss(input.value)
                                }}
                            />
                            <p class="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="w-full px-3 mt-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Request ID
                            </label>
                            <Select
                                className="basic-multi-select appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                options={options}
                                isMulti
                                onChange={ input=> {
                                    setsr(input.value)
                                }}
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <button className={`w-full rounded-md p-2 mb-5 bg-blue-${(ss==0||sr==0)?"300":"600"}`} type="submit"
                             disabled={(ss===0) ? true:false}
                            >
                                ADD ORDER
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>


    );
};

export default AddOrder;
