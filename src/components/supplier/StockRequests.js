import React from 'react'
import {useState,useEffect} from 'react'
import Supplier from './Supplier'
import axios from 'axios'
import { API_URL } from "../../constants";
import StockRequest from "./StockRequest";

const StockRequests = () =>{


    const [suppliers,setSuppliers] = useState([])
    const [openAdd, setAdd] = useState(false);
    const onOpenAddModal = () => setAdd(true);
    const onCloseAddModal = () => setAdd(false);


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


    return(

        <div>
            {/* medium and large screens */}
            <div className="hidden sm:block pt-10 pb-32 h-screen">
                <div className="flex justify-center">
                    <div className="grid grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
                        <div className="p-3">REQUEST ID</div>
                        <div className="p-3">PRODUCT CODE</div>
                        <div className="p-3">SIZE</div>
                        <div className="p-3">QUANTITY</div>
                        <div className="p-3">DATE</div>
                        <div className="p-3">ACTIONS</div>
                    </div>
                </div>
                <div
                    className="overflow-y-auto pb-10 font-normal"
                    style={{ maxHeight: "70vh" }}
                >
                    {[...Array(10)].map(i => {
                        return <StockRequest/>
                    })}
                </div>
            </div>
        </div>

    )


}


export default StockRequests
