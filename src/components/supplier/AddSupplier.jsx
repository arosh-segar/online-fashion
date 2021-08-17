import React, { useState } from "react";
import axios from 'axios'

const AddSupplier = () => {
 
  const [xs, setXs] = useState(false);
  const [s, setS] = useState(false);
  const [m, setM] = useState(false);
  const [l, setL] = useState(false);
  const [xl, setXl] = useState(false);


  
  function handleInput(){



    
  }

  function handleSubmit(){



  }

  
  return (
    <div>
      <div className="block mt-10 pb-10 min-h-screen">
        <div className="flex items-center justify-center">
          <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden">
            {/* Supplier ID */}
            <div class="w-full px-3 mt-10 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Supplier ID
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
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
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
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
                Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
             {/* PhoneNo */}
             <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Phone No.
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div> 
        </div>
        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <button className="w-full rounded-md p-2 mb-5 bg-blue-500">
                ADD SUPPLIER
              </button>
            </div>
   
     </div>
    </div>
 
        

  );
};

export default AddSupplier;
