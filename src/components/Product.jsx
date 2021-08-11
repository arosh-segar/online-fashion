import React, { useState } from "react";

const Product = () => {
  const [xs, setXs] = useState({ type: "xs", active: false });
  const [s, setS] = useState({ type: "s", active: false });
  const [m, setM] = useState({ type: "m", active: false });
  const [l, setL] = useState({ type: "l", active: false });
  const [xl, setXl] = useState({ type: "xl", active: false });

  const handleSize = (type) => {
    type === xs.type
      ? setXs((prevState) => ({ ...prevState, active: true }))
      : setXs((prevState) => ({ ...prevState, active: false }));
    type === s.type
      ? setS((prevState) => ({ ...prevState, active: true }))
      : setS((prevState) => ({ ...prevState, active: false }));
    type === m.type
      ? setM((prevState) => ({ ...prevState, active: true }))
      : setM((prevState) => ({ ...prevState, active: false }));
    type === l.type
      ? setL((prevState) => ({ ...prevState, active: true }))
      : setL((prevState) => ({ ...prevState, active: false }));
    type === xl.type
      ? setXl((prevState) => ({ ...prevState, active: true }))
      : setXl((prevState) => ({ ...prevState, active: false }));
  };

  return (
    <>
      <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div class="w-full max-w-6xl rounded-lg bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div class="relative">
                <img
                  src="https://pvlearn.com/wp-content/uploads/2019/08/adobe-stock-image-1.jpg"
                  class="w-full h-96 relative z-10 rounded-lg"
                  alt=""
                />
                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold uppercase text-2xl mb-5">
                  Mens's Ragged Waterproof Jacket
                </h1>
              </div>
              <div className="mb-10">
                <p class="mb-2 font-medium text-center">Available sizes</p>
                <div className="flex flex-wrap justify-center items-center mt-6 space-x-1 sm:space-x-5 lg:space-x-10">
                  <div
                    onClick={() => handleSize("xs")}
                    className={`hover:bg-green-400 bg-gray-400 ${
                      !xs.active ? "bg-gray-400" : "bg-green-400"
                    } font-semibold h-10 w-10 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    XS
                  </div>
                  <div
                    onClick={() => handleSize("s")}
                    className={`hover:bg-green-400 bg-gray-400 ${
                      !s.active ? "bg-gray-400" : "bg-green-400"
                    } font-semibold h-10 w-10 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    S
                  </div>
                  <div
                    onClick={() => handleSize("m")}
                    className={`hover:bg-green-400 bg-gray-400 ${
                      !m.active ? "bg-gray-400" : "bg-green-400"
                    } font-semibold h-10 w-10 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    M
                  </div>
                  <div
                    onClick={() => handleSize("l")}
                    className={`hover:bg-green-400 bg-gray-400 ${
                      !l.active ? "bg-gray-400" : "bg-green-400"
                    } font-semibold h-10 w-10 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    L
                  </div>
                  <div
                    onClick={() => handleSize("xl")}
                    className={`hover:bg-green-400 bg-gray-400 ${
                      !xl.active ? "bg-gray-400" : "bg-green-400"
                    } font-semibold h-10 w-10 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    XL
                  </div>
                </div>
              </div>
              <div>
                <div class="inline-block align-bottom mr-5">
                  <span class="text-2xl leading-none align-baseline">$</span>
                  <span class="font-bold text-5xl leading-none align-baseline">
                    59
                  </span>
                  <span class="text-2xl leading-none align-baseline">.99</span>
                </div>
                <div class="inline-block align-bottom">
                  <button class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i class="fa fa-paper-plane -ml-2 mr-2"></i> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
