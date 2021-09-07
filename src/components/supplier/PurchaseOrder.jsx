import React, {useState} from 'react'
import axios from 'axios'
import { API_URL } from "../../constants";
import EditOrder from "./EditOrder";



const PurchaseOrder = (props) =>{

    const [openEdit,setEdit] = useState(false)
    const onOpenEdit = () => setEdit(true)
    const onCloseEdit = () => setEdit(false)

    const [openDelete,setDelete] = useState(false)
    const onOpenDelete = () => setDelete(true)
    const onCloseDelete = () => setDelete(false)

    const {order} = props

    const deleteOrder = (id)=>{

        axios.delete(`${API_URL}/supplier/deleteOrder/${id}`)
            .then(response =>{
                console.log("deleted")
                onCloseDelete()
            }).catch(e =>{
            console.log(e)
        })

    }


    return(



        <div>
            <div className="flex justify-center">
                <div className="grid gap-5 grid-cols-7 sm:grid-cols-7 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                    <div className="pt-4 pb-4 m-auto">{order.id}</div>
                    <div className="pt-4 pb-4 m-auto">{order.supplierID}</div>
                    <div className="pt-4 pb-4 m-auto">{order.requestID.join(",")}</div>
                    <div className="pt-4 pb-4 m-auto">{order.status}</div>
                    <div className="pt-4 pb-4 m-auto">{order.orderedDate}</div>
                    <div className="pt-4 pb-4 m-auto">{order.deliveredDate}</div>
                    <div className="pt-2 pb-2 sm:pt-4 sm:pb-4 mr-2">
                        <button
                            className={`sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-${order.status=="pending"?"600":"500"}`}
                            onClick={onOpenEdit}
                            disabled={order.status=="pending"?false:true}
                        >
                            <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                            EDIT
                        </button>
                        <button
                            className={`sm:text-xs md:text-sm sm:pt-2 sm:pr-2 sm:pl-2 sm:pb-2 w-full rounded-md bg-red-${order.status=="pending"?"600":"500"}`}
                            onClick={onOpenDelete}
                            disabled={order.status=="pending"?false:true}
                            >
                            <i className="fa fa-trash mr-1 md:mr-3"></i>DELETE
                        </button>
                    </div>
                </div>
            </div>
            <EditOrder
             openEdit={openEdit}
             onCloseEdit={onCloseEdit}
             order={order}
            />
        </div>

    )





}

export default PurchaseOrder;