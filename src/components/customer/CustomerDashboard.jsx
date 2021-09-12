import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../../styles/navigation.css";
import Home from "./Home";
import Registration from "./Registration";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import Product from "./Product";
import Navigation from "./Navigation";
import OrdersList from "./OrdersList";

const CustomerDashboard = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0);

  useEffect(() => {
    axios
      .get(`${API_URL}/customer/get-all-products`)
      .then((response) => {
        setproducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("qty: ", qty);
    // console.log("cart2: ", cart);
    if (qty.length == 0) setCartTotal(0.0);
    else {
      let amt = 0.0;

      for (let x of qty) {
        if (x._id !== qty._id) {
          let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;
          amt = amt + 1.0 * (x.price * no);
        }
      }
      setCartTotal(amt);
    }
  });

  // Adding items to shopping cart
  const addItem = (item) => {
    if (item) setCart([...cart, item]);

    // setCart(
    //   cart.filter(function (cartItem) {
    //     return cartItem._id !== "";
    //   })
    // );

    // for (let x of cart) {
    //   console.log("arr:", x);
    // }
    // console.log("adding item");
    // console.log(cart);
    // console.log("passed: ", item);
    // item.availableqty = item.qty - 1;
  };

  // Removing items from shopping cart
  const removeItem = (item) => {
    // setCart(
    //   cart,
    //   cart.filter(function (cartItem) {
    //     return item !== cartItem;
    //   })
    // );
    // for (let x of cart) {
    //   if (x._id === item._id) {
    //     setCart(
    //       cart,
    //       cart.filter(function (cartItem) {
    //         return cartItem !== item;
    //       })
    //     );
    //   }
    // }
    // for (let x of cart) {
    //   if (x === item) {
    //     console.log("false", item._id);
    //     console.log("id cart:", x._id);

    //   }
    // }

    // Adding items to cart
    setCart(
      cart.filter(function (cartItem) {
        return cartItem !== item;
      })
    );
    //Increasing and updating cart items quantity
    setQty(
      qty.filter(function (newQty) {
        return newQty._id !== item._id;
      })
    );
  };

  const updateQuantity = (id, price, size) => {
    // item.availableqty = qty;
    let exist = false;
    let amt = 0.0;

    for (let x of qty) {
      if (x._id === id) {
        x.size = size;
        x.price = price;
        exist = true;
        break;
      }
    }

    if (exist === false) {
      const item = {
        _id: id,
        price: price,
        size: size,
      };

      setQty([...qty, item]);
    }
  };

  // Calculating total of cart items
  // const calculateCartTotal = () => {
  //   let total = 0.0;

  //   // if (qty.length === 1) {
  //   //   // let sizes = size.xs + size.s + size.m + size.l + size.xl;
  //   //   let newTot = price;
  //   //   setCartTotal(newTot);
  //   // }

  //   for (let x of qty) {
  //     let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;

  //     total = total + 1.0 * (x.price * no);
  //   }

  //   setCartTotal(total);
  //   // return total;
  // };

  return (
    <div>
      <div className="SPM-navbar">
        {/* <Link to={"/"}>Home</Link>

        <Link to={"/registration"}>Registration</Link>

        <Link to={"/customer/products"}>Products</Link> */}

        {/* <Link to={"/productItem"}>
          <i className="fa fa-sign-out mr-2"></i>Workshop Proposals
        </Link>
        <Link to={"/product"}>
          <i className="fa fa-sign-out mr-2"></i>Workshop Proposals
        </Link> */}
        {/* 
        <Link to={"/customer/cart"}>
          <i class="w3-xxlarge fa fa-shopping-cart"></i>
        </Link> */}
      </div>

      <div>
        <Navigation />
        {/* <body className="bg-gradient-to-r from-blue-600 to-blue-400"> */}
        <Switch>
          <Route exact path={"/customer"}>
            <Home />
          </Route>

          <Route path={"/customer/registration"}>
            <Registration />
          </Route>

          <Route path={"/customer/orders"}>
            <OrdersList />
          </Route>

          <Route path="/customer/products">
            <Products addItem={addItem} products={products} />
          </Route>

          {/* <Route
            path={"/productItem"}
            render={(props) => <ProductItem {...props} />}
          ></Route> */}

          <Route
            path={"/customer/product"}
            render={(props) => (
              <Product {...props} addItem={addItem} cart={cart} />
            )}
          ></Route>

          <Route path="/customer/cart">
            <ShoppingCart
              removeItem={removeItem}
              updateQuantity={updateQuantity}
              cartTotal={cartTotal}
              // calculateCartTotal={calculateCartTotal}
              cart={cart}
              qty={qty}
            />
          </Route>

          {/* <Route
            path={"/customer/cartItem"}
            render={(props) => (
              <ShoppingCartItem
                {...props}
                cart={cart}
                removeItem={removeItem}
              />
            )}
          ></Route> */}

          {/* <Redirect to={"/products"} /> */}
        </Switch>
        {/* </body> */}
      </div>
    </div>
  );
};
export default CustomerDashboard;
