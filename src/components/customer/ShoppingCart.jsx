import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./ShoppingCartItem";
import axios from "axios";
import { API_URL } from "../../constants";
import moment from "moment";
import swal from "sweetalert";
import { Modal } from "react-responsive-modal";
import "../../styles/customerStyles.css";

const ShoppingCart = (props) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);
  const [confirmOrderStatus, setConfirmOrderStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    _id: "",
    address: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    email: "",
    fname: "",
    lname: "",
    password: "",
    phone: "",
    registrationDate: "",
  });
  const [deliveryAddress, setDeliveryAddress] = useState("");

  useEffect(() => {
    setCart(props.cart);
    setQty(props.qty);

    let customer = localStorage.getItem("customer");
    if (customer) {
      customer = JSON.parse(customer);
      setDeliveryAddress(customer.address);
    }
  }, []);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // Handling cart items delete
  const handleDelete = (item) => {
    // props.removeItem(item);
    setCart(
      cart.filter(function (cartItem) {
        return cartItem !== item;
      })
    );

    setQty(
      qty.filter(function (newQty) {
        return newQty._id !== item._id;
      })
    );

    // let amt = 0.0;

    // for (let x of qty) {
    //   let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;

    //   amt = amt + 1.0 * (x.price * no);
    // }

    // setTotal(amt);

    // props.removeItem(item);

    // updateTotal();
    // handleCartTotal();
  };

  const quantityUpdate = () => {
    setCart(props.cart);
    setQty(props.qty);

    // let amt = 0.0;

    // for (let x of qty) {
    //   let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;

    //   amt = amt + 1.0 * (x.price * no);
    // }

    // setTotal(amt);
  };

  // const updateTotal = () => {
  //   var tot = props.calculateCartTotal();
  //   setTotal(tot);
  // };

  // const handleCartTotal = () => {
  //   let tot = 0.0;

  //   for (let x of props.qty) {
  //     let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;

  //     tot = tot + 1.0 * (x.price * no);
  //   }

  //   setTotal(tot);
  // };

  // const handleCartTotal = () => {
  //   props.calculateCartTotal();
  //   // let tot = props.calculateCartTotal();
  //   // setTotal(tot);
  // };

  // const [total, setTotal] = useState(0.0);
  // const [message, setMessage] = useState("all good");
  // const item = props.location.state.item;
  // duplicate = false;

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

  //   for (let x of cartTotal) {
  //     tot = tot + x.price;
  //   }
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
  //   }

  //   for (var i = 0; i < products.length; i++) {
  //     if (products.length == 1) {
  //       products.pop();
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
  //     }
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

  const changeAddress = (e) => {
    if (e.target.name == "address") setDeliveryAddress(e.target.value);
  };

  const confirmOrder = () => {
    // let date = moment().format("DD-MM-YYYY hh:mm:ss");
    let date = moment().format("DD-MM-YYYY");
    let customer = localStorage.getItem("customer");
    customer = JSON.parse(customer);

    if (!customer) {
      swal({
        title: "You need to Login to place your order!",
        text: "",
        icon: "warning",
      }).then(() => {
        window.location = `/customer/login`;
      });
    } else {
      let email = customer.email;
      let address = customer.address;
      setDeliveryAddress(address);
      let paymentDetails = {
        cardName: customer.cardName,
        cardNumber: customer.cardNumber,
        expiry: customer.expiry,
        cvv: customer.cvv,
      };

      let customerObj = {
        _id: customer._id,
        address: customer.address,
        cardName: customer.cardName,
        cardNumber: customer.cardNumber,
        expiry: customer.expiry,
        cvv: customer.cvv,
        email: customer.email,
        fname: customer.fname,
        lname: customer.lname,
        password: customer.password,
        phone: customer.phone,
        registrationDate: customer.registrationDate,
      };
      setCustomerDetails(customerObj);

      let orderProductArr = [];
      if (qty.length > 0) {
        for (let x of cart) {
          let product = {};
          let index = cart.indexOf(x);
          let sizes = qty[index];
          sizes = sizes.size;

          product.productID = x._id;
          product.productName = x.productName;
          product.productType = x.productType;
          product.productCategory = x.productCategory;
          product.pricePerUnit = x.pricePerUnit;
          product.productImageUrl = x.productImageUrl;
          product.productQty = sizes;

          orderProductArr.push(product);
        }
      }

      let totalAmount = props.cartTotal;

      let orderObject = {
        purchaseDate: date,
        products: orderProductArr,
        totalBillAmount: totalAmount,
        status: "pending",
        customerEmail: email,
        deliveryAddress: deliveryAddress,
      };

      if (orderProductArr.length === 0) {
        swal({
          title: "Your cart is empty, please add products to place your order!",
          text: "",
          icon: "warning",
        }).then(() => {
          // window.location = `/customer/`;
        });
      }
      // if (cart.length > 0 && totalAmount == 0) {
      //   swal({
      //     title:
      //       "Quantity of products added to cart is zero, please update products quantity!",
      //     text: "",
      //     icon: "warning",
      //   });
      // }

      if (orderProductArr.length > 0) {
        axios
          .post(`${API_URL}/customer/create-order`, orderObject)
          .then((response) => {
            swal({
              title: "Your Order has been placed Successfully!",
              text: "",
              icon: "success",
            }).then(() => {
              window.location = `orders`;
            });
            props.clearCart();
            setCart([]);
            setQty([]);
          })
          .catch((e) => {
            console.log("error", e.data);
            alert("error");
          });
      }
    }
  };

  return (
    <div>
      <div className="block pt-10 bg-gradient-to-r from-gray-700 to-gray-600 h-screen">
        <div style={{ maxHeight: "30vh" }}>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 font-semibold text-white sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center text-sm">
              <div className="p-3">PRODUCT</div>
              <div className="p-3">PRODUCT NAME</div>
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
              quantityUpdate={quantityUpdate}
              // updateTotal={updateTotal}
              // calcTot={calcTot}
              // calculateCartTotal={props.calculateCartTotal}
              // handleCartTotal={handleCartTotal}
              qty={props.qty}
            />
          ))}
        </div>
        <div className="mx-auto w-11/12 lg:w-10/12 mt-10">
          <div className="grid grid-cols-5 font-semibold">
            <div className="p-3 col-span-3"></div>

            <div className="p-3 text-center text-white font-semibold">
              Total
            </div>
            <div className="text-white text-center p-3">{props.cartTotal}</div>
          </div>
          <br />
          <br />
          <button
            class="bg-green-400 opacity-75 hover:opacity-300 text-gray-900 hover:text-gray-100 rounded-full px-10 py-3 font-semibold
                          pull-right"
            onClick={onOpenModal}
          >
            <i class="fa fa-paper-plane -ml-2 mr-2"></i> Place Order
          </button>
        </div>
      </div>
      {/* MODAL POP UP FOR CONFIM ORDER */}
      <div>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <h2 className="text-center text-blue-900 text-xl italic">
            Confirm Delivery Address
          </h2>
          <br />
          <br />
          <br />
          {/* <label className="mr-5 my-auto text-center">
                      SELECT :{" "}
                    </label> */}
          <form className="mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden">
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Delivery Address
              </label>
              <input
                class="appearance-none block w-full bg-blue-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                type="text"
                id="address"
                name="address"
                value={deliveryAddress}
                onChange={changeAddress}
                required
              />
            </div>
          </form>

          <br />
          <br />
          <br />
          <button
            class="bg-green-400 opacity-75 hover:opacity-300 text-gray-900 hover:text-gray-100 rounded-full px-10 py-3 font-semibold
                          pull-right"
            onClick={confirmOrder}
          >
            <i class="fa fa-paper-plane -ml-2 mr-2"></i> Confirm Order
          </button>
          <button></button>
        </Modal>
      </div>

      {/* END OF CONFIRM ORDER MODAL POP UP */}
    </div>
  );
};

export default ShoppingCart;
