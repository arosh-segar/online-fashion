import React from 'react'
import {useState,useEffect} from 'react'
import Supplier from './Supplier'
import axios from 'axios'
import { API_URL } from "../../constants";
import PurchaseOrder from "./PurchaseOrder";
import AddOrder from "./AddOrder";
import Select from "react-select";

const PurchaseOrders = () =>{


    const [suppliers,setSuppliers] = useState([])
    const [openAdd, setAdd] = useState(false);
    const onOpenAddModal = () => setAdd(true);
    const onCloseAddModal = () => setAdd(false);
    const [filter,setFilter] = useState("ALL")


    // useEffect(()=>{
    //
    //     axios.get(`${API_URL}/supplier/getRequests`)
    //         .then((response)=>{
    //             console.log(response.data)
    //             setSuppliers(response.data)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    //
    // },[])

    const options =[
        {value:"ALL",label:"ALL"},
        {value:"pending",label:"Pending"},
        {value:'received',label:"Received"}
    ]

    const orders = [
        {id:10,supplierID:'S121',requestID:[101,102],status:"pending",orderedDate:"20/08/2021",deliveredDate:"-"},
        {id:11,supplierID:'S11',requestID:[131,104],status:"pending",orderedDate:"20/08/2021",deliveredDate:"-"},
        {id:12,supplierID:'S23',requestID:[103],status:"pending",orderedDate:"20/08/2021",deliveredDate:"-"},
        {id:13,supplierID:'S24',requestID:[105],status:"received",orderedDate:"20/08/2021",deliveredDate:"21/08/2021"},
        {id:14,supplierID:'S15',requestID:[103,109],status:"received",orderedDate:"20/08/2021",deliveredDate:"21/08/2021"},
        {id:15,supplierID:'S55',requestID:[100,112],status:"received",orderedDate:"20/08/2021",deliveredDate:"21/08/2021"}

    ]

    return(

        <div>
            {/* medium and large screens */}
            <button
                className="ml-40 mt-20 bg-green-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={onOpenAddModal}>
                + ADD ORDER
            </button>
            <div className={"flex justify-center sm:w-11/12 lg:w-10/12"}>
                <label className="mr-5 my-auto">CATEGORY : </label>
                <Select
                 className={"p-2 border border-none w-2/4 rounded-lg"}
                 options={options}
                 defaultValue={options[0]}
                 onChange={(input)=>setFilter(input.value)}
                />
            </div>
            <div className="hidden sm:block pt-10 pb-32 h-screen">
                <div className="flex justify-center">
                    <div className="grid grid-cols-5 sm:grid-cols-7 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
                        <div className="p-3">ORDER ID</div>
                        <div className="p-3">SUPPLIER ID</div>
                        <div className="p-3">REQUEST ID</div>
                        <div className="p-3">STATUS</div>
                        <div className="p-3">ORDERED DATE</div>
                        <div className="p-3">DELIVERED DATE</div>
                        <div className="p-3">ACTIONS</div>
                    </div>
                </div>
                <div
                    className="overflow-y-auto pb-10 font-normal"
                    style={{ maxHeight: "70vh" }}
                >
                    {orders.map(order => {
                        if(filter=="ALL"){
                            return <PurchaseOrder order={order}/>
                        }else if(order.status===filter){
                            return <PurchaseOrder order={order}/>
                        }
                    })}
                </div>
            </div>
            <AddOrder
             openAdd={openAdd}
             onCloseAdd={onCloseAddModal}
            />
        </div>

    )


}


export default PurchaseOrders
