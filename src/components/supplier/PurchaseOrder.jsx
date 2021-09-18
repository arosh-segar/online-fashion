import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from "../../constants";
import EditOrder from "./EditOrder";
import DeleteOrder from "./DeleteOrderModal"
import {Link} from "react-router-dom";



const PurchaseOrder = (props) =>{


    const [order,setOrder] = useState(props.order)
    const [openDelete,setDelete] = useState(false)
    const onOpenDelete = () => setDelete(true)
    const onCloseDelete = () => setDelete(false)

    const [openEdit,setEdit] = useState(false)
    const onOpenEdit = () => setEdit(true)
    const onCloseEdit = () => setEdit(false)

    const ids = []

    order.items.map(item =>{

        if(!ids.includes(item.requestID)){
            ids.push(item.requestID)
        }

    } )


    const handleChange = (update) =>{

        let Order = update

        if(update.amount){
                Order.status='Received';
                Order.orderedDate=order.orderedDate;
                Order.deliveredDate=new Date().toISOString().slice(0,10);
                Order.amount=update.amount
        }else{
                Order.status='Pending';
                Order.orderedDate=order.orderedDate;
                Order.deliveredDate='-';
                Order.amount='-'
        }

        setOrder(Order)

    }

    return(

        <div>
            <div className="flex justify-center">
                <div className="grid gap-5 grid-cols-8 sm:grid-cols-8 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                    <div className="pt-4 pb-4 m-auto">{order.id}</div>
                    <div className="pt-4 pb-4 m-auto">{order.supplier.id}</div>
                    <div className="pt-4 pb-4 m-auto">{ids.join(",")}</div>
                    <div className="pt-4 pb-4 m-auto">{order.status}</div>
                    <div className="pt-4 pb-4 m-auto">{order.orderedDate}</div>
                    <div className="pt-4 pb-4 m-auto">{order.deliveredDate}</div>
                    <div className="pt-4 pb-4 m-auto">{order.amount}</div>
                    <div className="pt-2 pb-2 sm:pt-4 sm:pb-4 mr-2">
                        <Link
                            target={"_blank"}
                            to={{pathname:`/supplier/orderReport/${order.id}`}}
                        >
                           <button
                               className={`sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-${order.status=="pending"?"600":"500"}`}
                               disabled={order.status=="Pending"?false:true}
                            >
                            <i className="fa fa-print mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                            PRINT
                           </button>
                        </Link>
                        <button
                            className={`sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-${order.status=="pending"?"600":"500"}`}
                            onClick={onOpenEdit}
                            disabled={order.status=="Pending"?false:true}
                        >
                            <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                            EDIT
                        </button>
                        <button
                            className={`sm:text-xs md:text-sm sm:pt-2 sm:pr-2 sm:pl-2 sm:pb-2 w-full rounded-md bg-red-${order.status=="pending"?"600":"500"}`}
                            onClick={onOpenDelete}
                            disabled={order.status=="Pending"?false:true}
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
             handleChange={handleChange}
             editOrder={props.editOrder}
            />
            <DeleteOrder
                key={order._id}
                openDelete={openDelete}
                onCloseDelete={onCloseDelete}
                id={order.id}
                deleteOrder={props.deleteOrder}
            />
        </div>

    )





}

export default PurchaseOrder;
