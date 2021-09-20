import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const [noOfSizes, setNoOfSizes] = useState(0);
  const stock = props.stock;

  useEffect(() => {
    stock.sizes.xs.isAvailable && setNoOfSizes(noOfSizes + 1);
    stock.sizes.s.isAvailable && setNoOfSizes(noOfSizes + 1);
    stock.sizes.m.isAvailable && setNoOfSizes(noOfSizes + 1);
    stock.sizes.l.isAvailable && setNoOfSizes(noOfSizes + 1);
    stock.sizes.xl.isAvailable && setNoOfSizes(noOfSizes + 1);
  }, []);

  return (
    <div class="max-w-xs w-full mx-auto overflow-hidden bg-blue-300 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
      <img
        class="bg-contain bg-center w-full h-48"
        src={stock.productImageUrl}
        alt="NIKE AIR"
      />
      <div className="bg-gray-900 pb-2">
        <div class="px-4 py-2">
          <h1 class="text-md font-bold text-white text-center uppercase dark:text-white">
            {stock.productName}
          </h1>
        </div>
        <div class="px-4 py-2">
          <p className="text-white text-center">Available sizes</p>
        </div>
        <div
          class={`px-12 py-2 flex justify-center items-center mx-auto gap-x-5`}
        >
          {stock.sizes.xs && stock.sizes.xs.isAvailable && (
            <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
              <p>XS</p>
            </div>
          )}
          {stock.sizes.s && stock.sizes.s.isAvailable && (
            <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
              <p>S</p>
            </div>
          )}
          {stock.sizes.m && stock.sizes.m.isAvailable && (
            <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
              <p>M</p>
            </div>
          )}

          {stock.sizes.l && stock.sizes.l.isAvailable && (
            <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
              <p>L</p>
            </div>
          )}

          {stock.sizes.xl && stock.sizes.xl.isAvailable && (
            <div className="text-white text-center bg-gray-400 flex-wrap rounded-full h-8 w-8 cursor-pointer hover:bg-green-400 font-bold m-auto flex justify-center items-center">
              <p>XL</p>
            </div>
          )}
        </div>
        <div class="flex items-center justify-center px-4 py-2">
          <h1 class="text-sm font-bold text-blue-500 text-center">
            LKR {stock.pricePerUnit}.00
          </h1>
        </div>
        <div class="flex items-center justify-between px-4 py-2">
          <Link
            class="px-2 w-full py-2 text-xs font-semibold text-white text-center uppercase transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-gray-400 focus:outline-none"
            to={{
              pathname: "/customer/product",
              state: {
                stock: stock,
              },
            }}
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
