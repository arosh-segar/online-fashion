import React, {useState} from "react";
import axios from 'axios'
import {API_URL} from "../../constants";
import {Modal} from 'react-responsive-modal'

const AddVehicle = (props) => {
  const { onCloseAdd, openAdd } = props;
  const [vechileNumber, setVechileNumber] = useState("");
  const [vechileBrand, setVechileBrand] = useState("");
  const [driverName, setDriverName] = useState("");
  

  const handleSubmit = (e) => {

      e.preventDefault()

     
      const Vehicle = {
        vechileNumber,
        vechileBrand,
        driverName
      }

      axios.post(`${API_URL}/delivery/addVehicle`, Vehicle)
          .then(response => {
              console.log(response.data)
               
              onCloseAdd()
              alert("Successfully added")
          })
          .catch(e => {
              console.log(e.data)
          })


  }
  return (
    <div>
      <Modal open={openAdd} onClose={onCloseAdd} center>
                <div className="p-5 w-250 md:w-500">
                    <h2 className="text-center font-semibold font-sans">ADD VEHICLE</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
                        >
                                <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                       Vehicle Number
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder=""
                                        onChange={e => {
                                            setVechileNumber(e.target.value)
                                        }}
                                    required/>
                                   
                                </div>
                                {/* Name */}
                                <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        for="grid-first-name"
                                    >
                                        Brand Name
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                       
                                        onChange={e => {
                                            setVechileBrand(e.target.value)
                                        }}
                                        required/>
                                     
                                </div>
                                {/* Address */}
                                <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        for="grid-first-name"
                                    >
                                       Driver Name
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        
                                        onChange={e => {
                                            setDriverName(e.target.value)
                                        }}
                                        required />
                                     
                                </div>
                                 
                            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                                <button className="w-full rounded-md p-2 mb-5 bg-blue-500" type="submit">
                                ADD VEHICLE
                                </button>
                            </div>
                        </form>
                </div>
      </Modal>
    </div>
  );
};

export default AddVehicle;