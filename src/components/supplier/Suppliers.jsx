import React from 'react'
import {useState,useEffect} from 'react'
import Supplier from './Supplier'
import axios from 'axios'
import { API_URL } from "../../constants";
import AddSupplier from "./AddSupplier";

const Suppliers = () =>{


    const [suppliers,setSuppliers] = useState([])
    const [openAdd, setAdd] = useState(false);
    const onOpenAddModal = () => setAdd(true);
    const onCloseAddModal = () => setAdd(false);


   useEffect(()=>{

     axios.get(`${API_URL}/supplier/getSuppliers`)
     .then((response)=>{
         console.log(response.data)
        setSuppliers(response.data)
     })
     .catch((error)=>{
        console.log(error)
     })

   },[])


    return(

        <div>
        {/* medium and large screens */}
            <button
                className="bg-green-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                 onClick={onOpenAddModal}>
                + ADD SUPPLIER
            </button>
        <div className="hidden sm:block pt-10 pb-32 h-screen">
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">SUPPLIER ID</div>
              <div className="p-3"> NAME</div>
              <div className="p-3">ADDRESS</div>
              <div className="p-3">PHONE NO</div>
              <div className="p-3">EMAIL</div>
                <div className="p-3">ACTIONS</div>
            </div>
          </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >
          {suppliers.map(supplier => {
            return <Supplier supplier={supplier} key={supplier._id}/>
          })}
        </div>
        <AddSupplier
          openAdd={openAdd}
          onCloseAdd={onCloseAddModal}
        />
        </div>
        </div>

        )


}


export default Suppliers
