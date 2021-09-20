import React from 'react'
import {useState,useEffect} from 'react'
import DeliveryOrder from './DeliveryOrder'
import axios from 'axios'
import { API_URL } from "../../constants";
import {Link} from 'react-router-dom'

 

const DeliveryOrders = () =>{


    const [d_orders,setOrders] = useState([]);
    const [search,setSearch] = useState("");
     


   useEffect(()=>{

     axios.get(`${API_URL}/delivery/getD_Orders`)
     .then((response)=>{
         console.log(response.data)
         setOrders(response.data)
          
     })
     .catch((error)=>{
        console.log(error)
     })
      
   },[])
  
    

    return(
 
        <div>
             <Link to={{pathname:"/deliveryReport", state:{order:d_orders,filter:search}}}  
                className="ml-40 mt-10  bg-green-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                PRINT SUMMARY
            </Link>

            <div class="flex items-center justify-center">
    <div class="flex border-2 rounded mt-7">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search..."onChange={e => {setSearch(e.target.value)}}/>
    </div>
</div>
        <div className="hidden sm:block pt-3 pb-10 sm-screen">
          <div className="flex justify-center">
            <div className="grid grid-cols-4 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center font-semibold text-sm text-black">
              <div className="p-3">DELIVERY ID</div>
              <div className="p-3">ORDER ID</div>
              <div className="p-3">ORDER DATE</div>
              <div className="p-3">DELIVERY ADDRESS</div>
              <div className="p-3">DELIVERY DATE</div>
             <div className="p-3">VEHICLE NUMBER</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >

          {d_orders.filter((value)=>{
            if(search == ''){
              return value
            }
            else if(value.deliveryDate.toLowerCase().includes(search.toLowerCase())){
              return value
            }
          }).map(d_order => {
              return <DeliveryOrder d_order={d_order} key={d_order._id}/>
          })}
        </div>         
        </div>

        )


}


export default DeliveryOrders