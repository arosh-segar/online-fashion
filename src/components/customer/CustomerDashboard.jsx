import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../../styles/navigation.css";
import Home from "./Home";
import Registration from "./Registration";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import Product from "./Product";
import Navigation from "./Navigation";
import OrdersList from "./OrdersList";
import EditOrder from "./EditOrder";
import CustomerLogin from "./CustomerLogin";
import OrderReport from "./OrderReport";
import Footer from "./Footer";

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
  };

  // Removing items from shopping cart
  const removeItem = (item) => {
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
    let exist = false;

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

  const clearCart = () => {
    setCart([]);
    setQty([]);
    setCartTotal(0.0);
  };

  return (
    <div>
      <div className="SPM-navbar"></div>

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

          <Route
            path={"/customer/order-summary"}
            render={(props) => <OrderReport {...props} />}
          ></Route>

          <Route path={"/customer/orders"}>
            <OrdersList />
          </Route>

          <Route path="/customer/login">
            <CustomerLogin />
          </Route>

          <Route
            path={"/customer/edit-order"}
            render={(props) => <EditOrder {...props} products={products} />}
          ></Route>

          <Route path="/customer/products">
            <Products addItem={addItem} products={products} />
          </Route>

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
              clearCart={clearCart}
              cart={cart}
              qty={qty}
            />
          </Route>
        </Switch>
        <Footer />
        {/* </body> */}
      </div>
    </div>
  );
};
export default CustomerDashboard;
