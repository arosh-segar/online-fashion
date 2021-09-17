import React, {useState,useEffect} from "react";
import axios from 'axios'
import {API_URL} from "../../constants";
import {Modal} from 'react-responsive-modal'
import Select from 'react-select'
import ResponseModal from "../modals/ResponseModal";

const EditOrder = (props) => {

    const {openEdit, onCloseEdit,order,editOrder} = props

    const [allSuppliers,setAllSuppliers] = useState([]) //list of all suppliers
    const [supplier,setSupplier] = useState({value:order.supplier.id,label:order.supplier.id}) //default supplier
    const [supplierIDs,setSupplierIDs] = useState([]) //list of all supplierIDs
    const [orderSupplier,setOrderSupplier] = useState("")//updated supplierID

    const [allRequests,setAllRequests] = useState([]) //list of all requests
    const [requests,setRequests] = useState([]) // list of default request IDs
    const [requestIDs,setRequestIDs] = useState([])//list of all request IDs
    const [orderRequests,setOrderRequests] = useState([])//list of updated requestIDs

    const [received,setReceived] = useState(false)
    const [amount,setAmount] = useState("")

    const [openResponse, setOpenResponse] = useState(false);
    const onOpenResponseModal = () => setOpenResponse(true);

    const onCloseResponseModal = () => {
        setOpenResponse(false)
        onCloseEdit()
    }



    useEffect(()=>{

        axios.get(`${API_URL}/supplier/getStockRequests`)
            .then((response)=>{

                setAllRequests(response.data) //passing all requests

                const options=response.data.map(request =>{
                    if(request.status=='pending'){
                        return {
                            value:request.requestID,
                            label:request.requestID
                        }
                    }
                })

                setRequestIDs(options) //passing a list of all request IDs

               let selectedRequests = []

                order.items.map(item =>{
                  if(!selectedRequests.includes(item.requestID)){
                      selectedRequests.push(item.requestID)
                  }
                } )

               selectedRequests = selectedRequests.map(id =>{
                   return{
                       value:id,
                       label:id
                   }
               })

                setRequests(selectedRequests) //passing a list of selected requestIDs

               let orderRequests =order.items.map(item => {
                    return item.requestID
                })
                setOrderRequests(orderRequests) //copying the selected requestIDs

            })
            .catch((error)=>{
                console.log(error)
            })

        axios.get(`${API_URL}/supplier/getSuppliers`)
            .then((response)=>{

                setAllSuppliers(response.data)//passing a list of all suppliers

                const options=response.data.map(supplier =>{
                    return {
                        value:supplier.id,
                        label:supplier.id
                    }
                })

                setSupplierIDs(options) //passing a list of all supplier IDs
                setOrderSupplier(supplier.value)
            })
            .catch((error)=>{
                console.log(error)
            })

    },[])


    const handleSubmit = (e) => {

        e.preventDefault()

        const items = allRequests.filter(request =>{
            return orderRequests.includes(request.requestID)
        })

        let Supplier = {}

        allSuppliers.map(supplier => {
            if(orderSupplier == supplier.id){
                Supplier=supplier
            }
        })

        const Order = {
            id:order.id,
            supplier:Supplier,
            items:items,
            amount:Number(amount)
        }


        editOrder(Order)
        onOpenResponseModal()


    }



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
                                options={supplierIDs}
                                onChange={ input=> {
                                    setOrderSupplier(input.value)
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
                                classNamePrefix="select"
                                defaultValue={requests}
                                options={requestIDs}
                                isMulti
                                onChange={ input=> {
                                    const requests = input.map(option=>{
                                        return option.value
                                    })
                                    setOrderRequests(requests)
                                }}
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Amount(Rs.)
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                value={amount}
                                placeholder={"0.00"}
                                onChange={e=>{
                                    setAmount(e.target.value)
                                }}
                                disabled={!received}
                                required
                            />
                            <label className="flex mx-2 items-center text-gray-700 font-semibold">
                                <input
                                    className="mr-2 leading-tight"
                                    type="checkbox"
                                    onChange={()=>{
                                        received ? setReceived(false) : setReceived(true)
                                    }}
                                />
                                <span className="text-sm">Mark as Received</span>
                            </label>
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
