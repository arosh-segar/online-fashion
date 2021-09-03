import React, { useEffect, useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
// let products = [];
// let duplicate = false;
// let totDuplicate = false;
// let cartTotal = [];
const ShoppingCart = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    setCart(props.cart);
    setTotal(props.cartTotal);
    handleCartTotal();
  }, []);

  const handleDelete = (item) => {
    setCart(
      cart.filter(function (cartItem) {
        return cartItem !== item;
      })
    );
  };

  const handleCartTotal = () => {
    let tot = props.calculateCartTotal();
    setTotal(tot);
  };

  // const [total, setTotal] = useState(0.0);
  // const [message, setMessage] = useState("all good");
  // const item = props.location.state.item;
  // duplicate = false;
  // // console.log(item);

  // for (let x of products) {
  //   if (x._id === item._id) {
  //     duplicate = true;
  //     break;
  //   }
  // }
  // if (duplicate === false) {
  //   products.push(item);
  // }

  // const calculateTotal = (price, id) => {
  //   totDuplicate = false;

  //   let cartItem = {
  //     id: id,
  //     price: price,
  //   };

  //   // console.log("item: ", cartItem);

  //   for (let x of cartTotal) {
  //     if (x.id === cartItem.id) {
  //       totDuplicate = true;
  //       x.price = price;
  //       break;
  //     }
  //   }

  //   if (totDuplicate === false) {
  //     cartTotal.push(cartItem);
  //   }

  //   finalTotal();
  // };

  // const finalTotal = () => {
  //   let tot = 0.0;
  //   console.log("totl: ", tot);

  //   for (let x of cartTotal) {
  //     tot = tot + x.price;
  //   }
  //   console.log("ftot: ", tot);
  //   setTotal(tot);
  // };

  // const removeCartItem = (id) => {
  //   for (var i = 0; i < item.length; i++) {
  //     if (item.length == 1) {
  //       item.pop();
  //       break;
  //     }
  //     if (item[i]._id === id) {
  //       item.splice(i, 1);
  //     }
  //     console.log("item: ", item);
  //   }

  //   for (var i = 0; i < products.length; i++) {
  //     if (products.length == 1) {
  //       products.pop();
  //       console.log("pop");
  //       setMessage("last");
  //       props.location.state.item = {
  //         _id: "",
  //         name: null,
  //         image: "",
  //         sizes: {
  //           xs: "",
  //           s: "",
  //           m: "",
  //           l: "",
  //           xl: "",
  //         },
  //         pricePerUnit: "",
  //       };
  //       break;
  //     }
  //     if (products[i]._id === id) {
  //       products.splice(i, 1);
  //       // console.log("after del: ", products);
  //     }
  //     console.log("prod: ", products);
  //   }

  //   for (var i = 0; i < cartTotal.length; i++) {
  //     if (cartTotal.length == 1) {
  //       cartTotal.pop();
  //       break;
  //     }
  //     if (cartTotal[i].id === id) {
  //       cartTotal.splice(i, 1);
  //       finalTotal();
  //     }
  //   }

  //   if (products.length === 0) {
  //     setMessage("last");
  //   }
  // };

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
          {cart.map((item) => (
            <ShoppingCartItem
              key={item._id}
              item={item}
              removeItem={props.removeItem}
              handleDelete={handleDelete}
              updateQuantity={props.updateQuantity}
              handleCartTotal={handleCartTotal}
              qty={props.qty}
            />
          ))}
        </div>
        <div className="mx-auto w-11/12 lg:w-10/12 mt-10">
          <div className="grid grid-cols-5 font-semibold">
            <div className="p-3 col-span-3"></div>

            {/* Display Total */}

            {/* <div className="p-3 text-center text-white font-semibold">
              Total
            </div> */}
            {/* <div className="text-white text-center p-3">{total}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
