import React, {useState,useEffect} from "react";
import axios from 'axios'
import {API_URL} from "../../constants";
import {Modal} from 'react-responsive-modal'
import Select from 'react-select'
import ResponseModal from "../modals/ResponseModal";

const EditOrder = (props) => {

    const {openEdit, onCloseEdit,order} = props
    const [supplier,setSupplier] = useState({value:order.supplierID,label:order.supplierID})
    const [requests,setRequests] = useState([])


    const [openResponse, setOpenResponse] = useState(false);
    const onOpenResponseModal = () => setOpenResponse(true);
    const onCloseResponseModal = () => {
        setOpenResponse(false)
        onCloseEdit()
    }

    useEffect(() => {
        setRequests(order.requestID.map(req=>{
            return {
                value:req,
                label:req
            }

        }))
    }, [requests]);


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
            <Modal open={openEdit} onClose={onCloseEdit} center>
                <div className="p-5 w-250 md:w-500">
                    <h2 className="text-center font-semibold font-sans">EDIT ORDER</h2>
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
                                defaultValue={supplier}
                                options={options}
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
                                classNamePrefix="select"
                                defaultValue={requests}
                                options={options}
                                isMulti
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <button className="w-full rounded-md p-2 mb-5 bg-blue-500" type="submit">
                                UPDATE ORDER
                            </button>
                            <ResponseModal heading={'Edit Order'} text={`You have successfully updated the Purchase Order`} color={'#4287f5'} openResponse={openResponse} onCloseResponseModal={onCloseResponseModal} />
                        </div>
                    </form>
                </div>
            </Modal>
        </div>


    );
};

export default EditOrder;
