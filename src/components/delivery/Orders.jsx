import React from 'react'
import {useState,useEffect} from 'react'
import Order from './Order'
import axios from 'axios'
import { API_URL } from "../../constants";


const Orders = () =>{


    const [orders,setOrders] = useState([]);
    const [search,setSearch] = useState("");



   useEffect(()=>{

     axios.get(`${API_URL}/delivery/getOrders`)
     .then((response)=>{
         console.log(response.data)
         setOrders(response.data)

     })
     .catch((error)=>{
        console.log(error)
     })

   },[])



    return(

        <div className={'h-screen'}>
            <div class="flex items-center justify-center">
    <div class="flex border-2 rounded mt-7">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search..."onChange={e => {setSearch(e.target.value)}}/>
    </div>
</div>
        <div className="hidden sm:block pt-3 pb-10 sm-screen">
          <div className="flex justify-center">
            <div className="grid grid-cols-4 sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center font-semibold text-sm text-black">
              <div className="p-3">ORDER ID</div>
              <div className="p-3"> DATE</div>
              <div className="p-3">DELIVERY ADDRESS</div>
              <div className="p-3">STATUS</div>
             <div className="p-3">ACTION</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >

          {orders.filter((value)=>{
            if(search == ''){
              return value
            }
            else if(value._id.substr(value._id.length - 5).toLowerCase().includes(search.toLowerCase())){
              return value
            }
          }).map(order => {
              return <Order order={order} key={order._id}/>
          })}
        </div>

        </div>

        )


}


export default Orders
