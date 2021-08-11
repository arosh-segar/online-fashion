import React, { useState } from "react";

const ShoppingCartItem = ({ index }) => {
  const [isSizesOpen, setSizesOpen] = useState(false);
  const [xs, setXs] = useState(0);
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [l, setL] = useState(0);
  const [xl, setXl] = useState(0);

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid gap-5 grid-cols-5 sm:grid-cols-5 w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-gray-300 shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
          <div className="pt-4 pb-4 m-auto">P00{index + 1}</div>
          <div className="pt-4 pb-4 m-auto">PRODUCT {index + 1}</div>
          <div className="pt-4 pb-4 m-auto">{100 * (index + 10)}</div>
          <div className="pt-4 pb-4 mr-2">
            <button
              onClick={() => setSizesOpen(!isSizesOpen)}
              className="text-xs pt-2 pb-2 md:pt-4 md:pb-4 w-full md:w-10/12 rounded-md bg-blue-600"
            >
              <i
                className={`${
                  isSizesOpen ? "fa fa-times" : "fa fa-eye"
                } mr-3 transition duration-150 ease-in-out`}
              ></i>
              {isSizesOpen ? "CLOSE" : "VIEW SIZES"}
            </button>
          </div>
          <div className="pt-4 pb-4 m-auto">{200 * (index + 10)}</div>

          {isSizesOpen && (
            <div className="pb-4 m-auto col-span-5 w-full flex flex-1 lg:flex-row">
              <div className="m-auto my-auto flex lg:flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">XS :</p>
                <button
                  onClick={() => setXs(xs - 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {xs}
                </p>{" "}
                <button
                  onClick={() => setXs(xs + 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
              <div className="m-auto my-auto flex flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">S :</p>
                <button
                  onClick={() => setS(s - 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {s}
                </p>{" "}
                <button
                  onClick={() => setS(s + 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
              <div className="m-auto my-auto flex flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">M :</p>
                <button
                  onClick={() => setM(m - 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {m}
                </p>{" "}
                <button
                  onClick={() => setM(m + 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
              <div className="m-auto my-auto flex flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">L :</p>
                <button
                  onClick={() => setL(l - 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {l}
                </p>{" "}
                <button
                  onClick={() => setL(l + 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
              <div className="m-auto my-auto flex flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">XL :</p>
                <button
                  onClick={() => setXl(xl - 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {xl}
                </p>{" "}
                <button
                  onClick={() => setXl(xl + 1)}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="rounded-full h-6 w-5 bg-red-600 text-white font-medium flex justify-center items-center mt-12 ml-2 my-auto">
          X
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
