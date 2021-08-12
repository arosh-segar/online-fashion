import React, { useState } from "react";

const AddStock = () => {
  const [xs, setXs] = useState(false);
  const [s, setS] = useState(false);
  const [m, setM] = useState(false);
  const [l, setL] = useState(false);
  const [xl, setXl] = useState(false);

  return (
    <div>
      <div className="block mt-10 pb-10 min-h-screen">
        <div className="flex items-center justify-center">
          <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden">
            {/* Product code */}
            <div class="w-full px-3 mt-10 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Product code
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
            {/* Product Name */}
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Product Name
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
            {/* Product Type */}
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Product Type
              </label>
              <select
                className="p-2 border border-none w-full rounded-lg text-black"
                name="cars"
                id="cars"
                style={{ textAlignLast: "center" }}
              >
                <option value="0" selected>
                  Select
                </option>
                <option value="1">T-shirts</option>
                <option value="2">Trousers</option>
                <option value="3">Sports</option>
              </select>
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            {/* Product Category */}
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Product Category
              </label>
              <select
                className="p-2 border border-none w-full rounded-lg text-black"
                name="cars"
                id="cars"
                style={{ textAlignLast: "center" }}
              >
                <option value="0" selected>
                  Select
                </option>
                <option value="1">T-shirts</option>
                <option value="2">Trousers</option>
                <option value="3">Sports</option>
              </select>
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            {/* Price per unit */}
            <div class="w-full px-3 mt-10 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Price per unit
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
            <div class="w-full px-3 mt-10 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Select sizes and quantity
              </label>
              {/* XS */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => setXs(!xs)}
                  />
                  <span class="text-sm">XS</span>
                </label>
                <div className={xs ? "block" : "hidden"}>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Available quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Minimum quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Re-order quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                </div>
              </div>
              {/* S */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => setS(!s)}
                  />
                  <span class="text-sm">S</span>
                </label>
                <div className={s ? "block" : "hidden"}>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Available quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Minimum quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Re-order quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                </div>
              </div>
              {/* M */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => setM(!m)}
                  />
                  <span class="text-sm">M</span>
                </label>
                <div className={m ? "block" : "hidden"}>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Available quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Minimum quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Re-order quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                </div>
              </div>
              {/* L */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => setL(!l)}
                  />
                  <span class="text-sm">L</span>
                </label>
                <div className={l ? "block" : "hidden"}>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Available quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Minimum quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Re-order quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                </div>
              </div>
              {/* XL */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => setXl(!xl)}
                  />
                  <span class="text-sm">XL</span>
                </label>
                <div className={xl ? "block" : "hidden"}>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Available quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Minimum quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-row items-center px-10">
                    <label
                      class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Re-order quantity
                    </label>
                    <input
                      class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Image */}
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Product Image upload
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
              <p class="text-red-500 text-xs italic">Please select an image</p>
            </div>
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <button className="w-full rounded-md p-2 mb-5 bg-blue-500">
                ADD STOCK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
