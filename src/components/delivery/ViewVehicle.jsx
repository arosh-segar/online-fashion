import React, { useState } from "react";
import axios from 'axios'
import { API_URL } from "../../constants";
import {Modal} from 'react-responsive-modal'

const ViewSupplier = (props) => {

    const {openEdit,onCloseEdit} = props
    const [vechileNumber, setVechileNumber] = useState(props.vechilce.vechileNumber);
  const [vechileBrand, setVechileBrand] = useState(props.vechilce.vechileBrand);
  const [driverName, setDriverName] = useState(props.vechilce.driverName);
     


    const handleSubmit = (e)=>{

        e.preventDefault()

        const Vehicle = {
            vechileNumber,
            vechileBrand,
            driverName
          }


        axios.patch(`${API_URL}/delivery/addVehicle`,Vehicle)
            .then(response =>{
                console.log(response.data)
                onCloseEdit()
            })
            .catch(e=>{
                console.log(e.data)
            })


    }


    return (
        <div>
            <Modal open={openEdit} onClose={onCloseEdit}>
            <div className="block mt-10 pb-10 min-h-screen">
                <div className="flex items-center justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
                    >
                        <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden">
                            {/* Supplier ID */}
                            <div class="w-full px-3 mt-10 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-first-name"
                                >
                                   Vehicle Number
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Jane"
                                    value={vechileNumber}
                                    onChange={e=>{setVechileNumber(e.target.value)}}
                                />
                                <p class="text-red-500 text-xs italic">
                                    Please fill out this field.
                                </p>
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
                                    placeholder="Jane"
                                    value={vechileBrand}
                                    onChange={e=>{setVechileBrand(e.target.value)}}
                                />
                                <p class="text-red-500 text-xs italic">
                                    Please fill out this field.
                                </p>
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
                                    placeholder="Jane"
                                    value={driverName}
                                    onChange={e=>{setDriverName(e.target.value)}}
                                />
                                <p class="text-red-500 text-xs italic">
                                    Please fill out this field.
                                </p>
                            </div>
                             
                        </div>
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <button className="w-full rounded-md p-2 mb-5 bg-blue-500" type ="submit" >
                                UPDATE VEHICLE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </Modal>
        </div>



    );
};

export default ViewSupplier;