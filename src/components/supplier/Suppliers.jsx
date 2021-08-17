import React from 'react'
import {useState,useEffect} from 'react'
import Supplier from './Supplier'
import axios from 'axios'

const Suppliers = () =>{


   const [suppliers,setSuppliers] = useState([])


   useEffect(()=>{


     axios.get("http://localhost:5000/admin/attendees")
     .then((response)=>{
        setSuppliers(response.data)
     })
     .catch((error)=>{
        console.log(error)
     })

   })



    return(

        <div>
        {/* medium and large screens */}
        <div className="hidden sm:block pt-10 pb-32 h-screen">
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">SUPPLIER ID</div>
              <div className="p-3"> NAME</div>
              <div className="p-3">AVAILABLE QUANTITY</div>
              <div className="p-3">RE-ORDER QUANTITY</div>
              <div className="p-3">ACTIONS</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >
          {suppliers.map(supplier => {
            return <Supplier/>
          })}
        </div>
      </div>


 


        </div>

        )


}


export default Suppliers
