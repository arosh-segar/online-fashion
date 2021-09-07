import React from 'react'
import {useState,useEffect} from 'react'
import Supplier from './Supplier'
import axios from 'axios'
import { API_URL } from "../../constants";
import StockRequest from "./StockRequest";

const StockRequests = () =>{


    const [requests,setRequests] = useState([])
    const [openAdd, setAdd] = useState(false);
    const onOpenAddModal = () => setAdd(true);
    const onCloseAddModal = () => setAdd(false);

    const onApprove =(requestID)=>{

        axios.put(`${API_URL}/supplier/approveRequest/:id`)
            .then(response=>{

            })
            .catch(e=>{
                console.log(e)
            })

    }

    useEffect(()=>{

        axios.get(`${API_URL}/supplier/getStockRequests`)
            .then((response)=>{
                console.log(response.data)
                setRequests(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })

    },[])


    return(

        <div>
            {/* medium and large screens */}
            <div className="hidden sm:block pt-10 pb-32 h-screen">
                <div className="flex justify-center">
                    <div className="grid grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
                        <div className="p-3">PRODUCT CODE</div>
                        <div className="p-3">PRODUCT NAME</div>
                        <div className="p-3">SIZE & QUANTITY</div>
                        <div className="p-3">STATUS</div>
                        <div className="p-3">ACTIONS</div>
                    </div>
                </div>
                <div
                    className="overflow-y-auto pb-10 font-normal"
                    style={{ maxHeight: "70vh" }}
                >
                    {requests.map(request => {
                        return <StockRequest stockRequest={request} key={request._id}/>
                    })}
                </div>
            </div>
        </div>

    )


}


export default StockRequests
