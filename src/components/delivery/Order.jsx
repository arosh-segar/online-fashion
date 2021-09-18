import React, {useState} from 'react'
 
import ViewProduct from './ViewProduct'
import AssignVehicle from './AssignVehicle'

const Order = (props) =>{

    const [order] = useState(props.order)
    const [openProduct,setProduct] = useState(false)
    const onOpenProduct = () => setProduct(true)
    const onCloseProduct = () => setProduct(false)

    const [openAssign,setAssign] = useState(false)
    const onOpenAssign = () => setAssign(true)
    const onCloseAssign = () => setAssign(false)

     
     

    

    return(

        <div>
            <div className="flex justify-center">
              <div className="grid gap-3 grid-cols-4 sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-3 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                  <div className="pt-4 pb-4 m-auto">{order._id.substr(order._id.length - 4)}</div>
                  <div className="pt-4 pb-4 m-auto">{order.purchaseDate}</div>
                  <div className="pt-4 pb-4 m-auto">{order.deliveryAddress}</div>
                  <div className="pt-4 pb-4 m-auto">{order.status}</div>
                <div className="pt-2 pb-2 sm:pt-4 sm:pb-4 mr-2">
                  <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600"
                  onClick={onOpenProduct}>
                    <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                    View Product
                  </button>
                  <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-2 sm:pl-2 sm:pb-2 w-full rounded-md bg-red-600"
                    onClick={onOpenAssign} disabled={order.status == "confirmed" ? true : false}>
                    <i className="fa fa-trash mr-1 md:mr-3"></i>
                    Assign Vehicle
                  </button>
                </div>
              </div>
            </div>
            <ViewProduct
             openProduct={openProduct}
             onCloseProduct={onCloseProduct}
             order={order}
            />
            <AssignVehicle
             openAssign={openAssign}
             onCloseAssign={onCloseAssign}
             orders={order}
            />
             
        </div>    

    )
   









}

export default Order;