import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import moment from "moment";
import EditOrderItem from "./EditOrderItem";

const EditOrder = (props) => {
  // console.log("tot: ", total);
  const orderItem = props.location.state.orderItem;
  const {
    orderID,
    products,
    totalBillAmount,
    status,
    customerEmail,
    purchaseDate,
  } = props.location.state.orderItem;

  // Edit Order
  const [editCart, setEditCart] = useState(
    props.location.state.orderItem.products
  );
  const [editQty, setEditQty] = useState([]);
  const [editCartTotal, setEditCartTotal] = useState(0.0);

  useEffect(() => {
    console.log("ord: ", props.location.state.orderItem);

    for (let x of products) {
      let qty = {
        _id: x.productID,
        size: x.productQty,
        pricePerUnit: x.pricePerUnit,
      };
      editQty.push(qty);
    }

    // setEditQty(qtyArr);
    console.log("cart2: ", editCart);
    console.log("qty2:", editQty);

    if (editQty.length == 0) setEditCartTotal(0.0);
    else {
      let amt = 0.0;
      for (let x of editQty) {
        if (x._id !== editQty._id) {
          let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;
          amt = amt + 1.0 * (x.pricePerUnit * no);
        }
      }
      setEditCartTotal(amt);
    }
  }, []);

  // Handling cart items delete
  const handleDelete = (item) => {
    // props.removeItem(item);
    setEditCart(
      editCart.filter(function (cartItem) {
        return cartItem !== item;
      })
    );

    setEditQty(
      editQty.filter(function (newQty) {
        return newQty._id !== item._id;
      })
    );
    let amt = 0.0;
    for (let x of editQty) {
      if (x._id !== editQty._id) {
        let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;
        amt = amt + 1.0 * (x.pricePerUnit * no);
      }
    }
    setEditCartTotal(amt);
  };

  const quantityUpdate = (id, price, size) => {
    let exist = false;

    for (let x of editQty) {
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

      setEditQty([...editQty, item]);
    }
    let amt = 0.0;
    for (let x of editQty) {
      if (x._id !== editQty._id) {
        let no = x.size.xs + x.size.s + x.size.m + x.size.l + x.size.xl;
        amt = amt + 1.0 * (x.pricePerUnit * no);
      }
    }
    setEditCartTotal(amt);
    // setEditCart(props.cart);
    // setEditQty(props.qty);
  };

  const editOrder = () => {
    // console.log("cart:", editCart);
    // console.log("qty: ", editQty);

    let date = moment().format("DD-MM-YYYY hh:mm:ss");
    let email = "vinayagar@gmail.com";
    let address = "Colombo";

    console.log("date: ", date);

    let orderProductArr = [];

    for (let x of editCart) {
      let product = {};
      let index = editCart.indexOf(x);
      let sizes = editQty[index].size;

      product.productID = x._id;
      product.productName = x.productName;
      product.productType = x.productType;
      product.productCategory = x.productCategory;
      product.productPricePerUnit = x.pricePerUnit;
      product.productImageUrl = x.productImageUrl;
      product.productQty = sizes;

      orderProductArr.push(product);
    }

    let totalAmount = props.location.state.orderItem.editCartTotal;
    // console.log("api: ", API_URL);

    let orderObject = {
      purchaseDate: date,
      products: orderProductArr,
      totalBillAmount: totalAmount,
      status: "pending",
      customerEmail: email,
      deliveryAddress: address,
    };

    console.log("order: ", orderObject);

    axios
      .post(`${API_URL}/customer/edit-order`, orderObject)
      .then((response) => {
        console.log("success", response.data);
        alert("successfully placed order!");
      })
      .catch((e) => {
        console.log("error", e.data);
        alert("error");
      });
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
        {editQty && (
          <div className="overflow-y-auto pb-10" style={{ maxHeight: "70vh" }}>
            {editCart.map((item) => (
              <EditOrderItem
                key={item._id}
                item={item}
                handleDelete={handleDelete}
                quantityUpdate={quantityUpdate}
                editQty={editQty}
                products={props.products}
              />
            ))}
          </div>
        )}

        <div className="mx-auto w-11/12 lg:w-10/12 mt-10">
          <div className="grid grid-cols-5 font-semibold">
            <div className="p-3 col-span-3"></div>

            <div className="p-3 text-center text-white font-semibold">
              Total
            </div>
            <div className="text-white text-center p-3">{editCartTotal}</div>
          </div>
          <br />
          <br />
          <button
            class="bg-green-400 opacity-75 hover:opacity-300 text-gray-900 hover:text-gray-100 rounded-full px-10 py-3 font-semibold pull-right"
            onClick={editOrder}
          >
            <i class="fa fa-paper-plane -ml-2 mr-2"></i> Edit Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
