import React from "react";

const Product = () => {
  return (
    <section class="bg-yellow-300">
      <div class="px-5 sm:px-10 lg:px-20 py-10 lg:py-24 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 gap-y-10 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-4 lg:gap-x-5 lg:gap-y-10">
          {[...Array(10)].map((element, i) => (
            <>
              <div class="max-w-xs mx-auto overflow-hidden bg-red-300 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
                {/* <div class="px-4 py-2">
                  <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                    NIKE AIR
                  </h1>
                  <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi quos quidem sequi illum facere recusandae voluptatibus
                  </p>
                </div> */}

                <img
                  class="object-cover w-full h-48"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                  alt="NIKE AIR"
                />
                <div className="bg-gray-900 pb-2">
                  <div class="px-4 py-2">
                    <h1 class="text-md font-bold text-white text-center uppercase dark:text-white">
                      NIKE AIR
                    </h1>
                  </div>
                  <div class="px-4 py-2">
                    <p className="text-white text-center">Available sizes</p>
                  </div>
                  <div class="px-12 py-2 flex mx-auto items-center justify-between grid grid-cols-5 gap-x-5">
                    <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
                      <p>XS</p>
                    </div>
                    <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
                      <p>S</p>
                    </div>
                    <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
                      <p>M</p>
                    </div>
                    <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
                      <p>L</p>
                    </div>
                    <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
                      <p>XL</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-center px-4 py-2">
                    <h1 class="text-sm font-bold text-blue-500 text-center">
                      LKR 1,290.00
                    </h1>
                  </div>
                  <div class="flex items-center justify-between px-4 py-2">
                    <button class="px-2 w-full py-2 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
