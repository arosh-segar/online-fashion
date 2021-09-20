import React, {useState} from 'react'
import DeliveryReport from './DeliveryReport' 
import {Link} from 'react-router-dom'
const DeliveryOrder = (props) =>{

    const [d_order] = useState(props.d_order)

    return(

        <div>
             
            <div className="flex justify-center mt-3">
              <div className="grid gap-3 grid-cols-4 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-2 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                  <div className="pt-4 pb-4 m-auto">{d_order._id.substr(d_order._id.length - 4)}</div>
                  <div className="pt-4 pb-4 m-auto">{d_order.orderId}</div>
                  <div className="pt-4 pb-4 m-auto">{d_order.orderDate}</div>
                  <div className="pt-4 pb-4 m-auto">{d_order.location}</div>
                  <div className="pt-4 pb-4 m-auto">{d_order.deliveryDate}</div>
                  <div className="pt-4 pb-4 m-auto">{d_order.vehicleNumber}</div>
                 
              </div>
            </div>
            
        </div>    

    )
   









}

export default DeliveryOrder;