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
        {/* medium and large screens */}
            <button
                className="bg-green-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                 onClick={onOpenAddModal}>
                + ADD VEHICLE
            </button>
        <div className="hidden sm:block pt-10 pb-32 h-screen">
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">Vehicle Number</div>
              <div className="p-3"> Vehicle Brand</div>
              <div className="p-3">Driver Name</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ maxHeight: "70vh" }}
        >
          {vehicles.map(vehicle => {
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