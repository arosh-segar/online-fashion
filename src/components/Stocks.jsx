import React from "react";

const Stocks = () => {
  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:block pt-10">
        <div style={{ maxHeight: "30vh" }}>
          <div className="flex justify-center ">
            <div className="flex justify-center sm:w-11/12 lg:w-10/12">
              <label className="mr-5 my-auto">CATEGORY : </label>
              <select
                className="p-2 border border-none w-2/4 rounded-lg"
                name="cars"
                id="cars"
                style={{ textAlignLast: "center" }}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="1">T-shirts</option>
                <option value="2">Trousers</option>
                <option value="3">Sports</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">PRODUCT CODE</div>
              <div className="p-3 hidden sm:block">PHOTO</div>
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">AVAILABLE QUANTITY</div>
              <div className="p-3">RE-ORDER QUANTITY</div>
              <div className="p-3">ACTIONS</div>
            </div>
          </div>
        </div>
        <div
          className="overflow-y-auto pb-10 font-normal"
          style={{ height: "70vh" }}
        >
          {[...Array(10)].map((element, i) => (
            <div className="flex justify-center">
              <div className="grid gap-5 grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                <div className="pt-4 pb-4 m-auto">P00{i + 1}</div>
                <div className="pt-4 pb-4 m-auto hidden sm:block">
                  <img
                    className="rounded-lg h-20"
                    src="https://images.unsplash.com/photo-1525268499284-86ec700c826d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="No pic"
                  />
                </div>
                <div className="pt-4 pb-4 m-auto">PRODUCT {i + 1}</div>
                <div className="pt-4 pb-4 m-auto">{100 * (i + 10)}</div>
                <div className="pt-4 pb-4 m-auto">{100 * (i + 2)}</div>
                <div className="pt-2 pb-2 sm:pt-4 sm:pb-4 mr-2">
                  <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600">
                    <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                    EDIT
                  </button>
                  <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-2 sm:pl-2 sm:pb-2 w-full rounded-md bg-red-600">
                    <i className="fa fa-trash mr-1 md:mr-3"></i>DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* small screens */}
      <div className="block sm:hidden mt-10">
        <div className="">
          <div className="flex justify-center">
            <div className="flex justify-center w-11/12">
              <select
                className="p-2 border border-none w-full rounded-lg"
                name="cars"
                id="cars"
                style={{ textAlignLast: "center" }}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="1">T-shirts</option>
                <option value="2">Trousers</option>
                <option value="3">Sports</option>
              </select>
            </div>
          </div>
          {[...Array(10)].map((element, i) => (
            <div className="flex justify-center">
              <div className="grid gap-5 text-center grid-cols-1 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40">
                <div className="mt-2 pt-1 pb-1 m-auto">
                  <div className="">PRODUCT CODE</div>
                  <div className="text-xs">P00{i + 1}</div>
                </div>
                <div className="pt-1 pb-1 m-auto hidden sm:block">
                  <img
                    className="rounded-lg h-20"
                    src="https://images.unsplash.com/photo-1525268499284-86ec700c826d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="No pic"
                  />
                </div>
                <div className="pt-1 pb-1 m-auto">
                  <div className="">PRODUCT NAME</div>
                  <div className="text-xs">PRODUCT {i + 1}</div>
                </div>
                <div className="pt-1 pb-1 m-auto">
                  <div className="">AVAILABLE QUANTITY</div>
                  <div className="text-xs">{100 * (i + 10)}</div>
                </div>
                <div className="pt-1 pb-1 m-auto">
                  <div className="">RE-ORDER QUANTITY</div>
                  <div className="text-xs">{100 * (i + 2)}</div>
                </div>
                <div className="flex-row mx-auto justify-center pt-4 pb-4">
                  <button className="p-2 mb-3 w-full rounded-md bg-blue-600">
                    <i className="fa fa-pencil mr-3"></i>EDIT
                  </button>
                  <button className="p-2 w-full rounded-md bg-red-600">
                    <i className="fa fa-trash mr-3"></i>DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stocks;
