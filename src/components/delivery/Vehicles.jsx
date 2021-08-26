import React from 'react'
import {useState,useEffect} from 'react'
import Vehicle from './Vehicle'
import axios from 'axios'
import { API_URL } from "../../constants";
import AddVehicle from "./AddVehicle";

const Vehicles = () =>{


    const [vehicles,setVehicles] = useState([])
    const [openAdd, setAdd] = useState(false);
    const onOpenAddModal = () => setAdd(true);
    const onCloseAddModal = () => setAdd(false);


   useEffect(()=>{

     axios.get(`${API_URL}/delivery/getVehicle`)
     .then((response)=>{
         console.log(response.data)
         setVehicles(response.data)
          
     })
     .catch((error)=>{
        console.log(error)
     })
     
   },[])
     
    
    const deleteVehicles = (vechileNumber)=>{

    axios.delete(`${API_URL}/delivery/deleteVehicle/${vechileNumber}`)
        .then(response =>{
            console.log("delted")
        }).catch(e =>{
            console.log(e)
    })

   }


    return(

        <div>

        
            <button
                className="ml-40 mt-10  bg-green-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                   onClick={onOpenAddModal}  >
                + ADD VEHICLE
            </button>

            <div class="flex items-center justify-center">
    <div class="flex border-2 rounded">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search..."/>
        <button class="flex items-center justify-center px-4 border-l">
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button>
    </div>
</div>
        <div className="hidden sm:block pt-3 pb-10 sm-screen">
          <div className="flex justify-center">
            <div className="grid grid-cols-4 sm:grid-cols-4 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center font-semibold text-sm text-black">
              <div className="p-3">Vehicle Number</div>
              <div className="p-3"> Vehicle Brand</div>
              <div className="p-3">Driver Name</div>
                <div className="p-3">Action</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >

          {vehicles.map(vehicle => {
             console.log(vehicle)
            return <Vehicle vehicle={vehicle} key={vehicle._id}  deleteVehicles={deleteVehicles}/>
          })}
        </div>
        <AddVehicle
          openAdd={openAdd}
          onCloseAdd={onCloseAddModal}
        />
        </div>

        )


}


export default Vehicles