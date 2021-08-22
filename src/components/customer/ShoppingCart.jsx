import React, { useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import ShoppingCartItem from "./ShoppingCartItem";
let products = [];
let duplicate = false;
let totDuplicate = false;
let cartTotal = [];
const ShoppingCart = (props) => {
  const [total, setTotal] = useState(0.0);
  const item = props.location.state.item;
  duplicate = false;
  // console.log(item);

  for (let x of products) {
    if (x._id === item._id) {
      duplicate = true;
      break;
    }
  }
  if (duplicate === false) {
    products.push(item);
  }

  const calculateTotal = (price, action, id) => {
    totDuplicate = false;

    let cartItem = {
      id: id,
      price: price,
    };

    // console.log("item: ", cartItem);

    for (let x of cartTotal) {
      if (x.id === cartItem.id) {
        totDuplicate = true;
        x.price = price;
        break;
      }
    }

    if (totDuplicate === false) {
      cartTotal.push(cartItem);
    }

    finalTotal();
  };

  const finalTotal = () => {
    let tot = 0.0;
    console.log("totl: ", tot);

    for (let x of cartTotal) {
      tot = tot + x.price;
    }
    console.log("ftot: ", tot);
    setTotal(tot);
  };

  const removeCartItem = (id) => {
    // console.log("dele id: ", id);
    // console.log("before del: ", products);
    for (var i = 0; i < item.length; i++) {
      if (i === item.length - 1) {
        item.splice(-1);
        break;
      }
      if (item[i]._id === id) {
        item.splice(i, 1);
        console.log("after del: ", item);
      }
      console.log("item: ", item);
    }

    for (var i = 0; i < products.length; i++) {
      if (i === products.length - 1) {
        products.splice(-1);
        break;
      }
      if (products[i]._id === id) {
        products.splice(i, 1);
        console.log("after del: ", products);
      }
      console.log("item: ", products);
    }

    for (var i = 0; i < cartTotal.length; i++) {
      if (i === cartTotal.length - 1) {
        cartTotal.splice(-1);
        break;
      }
      if (cartTotal[i].id === id) {
        cartTotal.splice(i, 1);
        finalTotal();
      }
    }
  };

  return (
    <div>
      <div className="block pt-10 bg-gradient-to-r from-gray-700 to-gray-600 h-screen">
        <div style={{ maxHeight: "30vh" }}>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 font-semibold text-white sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center text-sm">
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">PRODUCT TYPE</div>
              <div className="p-3">PRICE</div>
              <div className="p-3">SIZES</div>
              <div className="p-3">TOTAL</div>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto pb-10" style={{ maxHeight: "70vh" }}>
          {products.map((item) => (
            <ShoppingCartItem
              key={item._id}
              item={item}
              calculateTotal={calculateTotal}
              removeCartItem={removeCartItem}
            />
          ))}
        </div>
        <div className="mx-auto w-11/12 lg:w-10/12 mt-10">
          <div className="grid grid-cols-5 font-semibold">
            <div className="p-3 col-span-3"></div>
            <div className="p-3 text-center text-white font-semibold">
              Total
            </div>
            <div className="text-white text-center p-3">{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
