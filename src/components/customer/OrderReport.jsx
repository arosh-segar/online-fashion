import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { API_URL } from "../../constants";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";
import { buildQueries } from "@testing-library/react";

const OrderReport = (props) => {
  const [orderSummaryType, setOrderSummaryType] = useState(
    props.location.state.orderSummaryType
  );
  const [orders, setOrders] = useState([]);
  const [sortedOrders, setSortedOrders] = useState([]);
  const [netTotal, setNetTotal] = useState("");

  useEffect(() => {
    let customer = localStorage.getItem("customer");
    let customerEmail = "";
    let today = moment().format("DD-MM-YYYY hh:mm:ss");
    let month = today.substring(3, 5);
    month = parseInt(month) - 1;

    if (customer) {
      customer = JSON.parse(customer);
      customerEmail = customer.email;
    }

    if (customerEmail != "") {
      axios
        .get(`${API_URL}/customer/get-all-orders/${customerEmail}`)
        .then((response) => {
          setOrders(response.data);

          let sortOrdersForLastMonth = response.data;

          if (props.location.state.orderSummaryType === "last-month") {
            sortOrdersForLastMonth = sortOrdersForLastMonth.filter(function (
              item
            ) {
              let date = item.purchaseDate;
              let mm = date.substring(3, 5);
              mm = parseInt(mm);
              return month == item.purchaseDate.substring(3, 5);
            });
          }

          let ordersSortedByNewDate = [];

          if (props.location.state.orderSummaryType == "overall") {
            ordersSortedByNewDate = response.data.reverse();
          }
          if (props.location.state.orderSummaryType == "last-month") {
            ordersSortedByNewDate = sortOrdersForLastMonth.reverse();
          }
          setSortedOrders(ordersSortedByNewDate);
          setOrders(ordersSortedByNewDate);
          calcTotal(ordersSortedByNewDate);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (customerEmail == "") {
      swal({
        title: "You need to Login to view your Order Report!",
        text: "",
        icon: "warning",
      }).then(() => {
        window.location = `/customer/login`;
      });
    }
  }, []);

  const calculateTotalProductQty = (product) => {
    let totalQty = 0;

    if (product.productQty.xs) {
      totalQty = parseFloat(totalQty) + parseFloat(product.productQty.xs);
    }

    if (product.productQty.s) {
      totalQty = parseFloat(totalQty) + parseFloat(product.productQty.s);
    }

    if (product.productQty.m) {
      totalQty = parseFloat(totalQty) + parseFloat(product.productQty.m);
    }

    if (product.productQty.l) {
      totalQty = parseFloat(totalQty) + parseFloat(product.productQty.l);
    }

    if (product.productQty.xl) {
      totalQty = parseFloat(totalQty) + parseFloat(product.productQty.xl);
    }

    return totalQty;
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calcTotal = (orderArr) => {
    let totalPrice = 0.0;

    for (let x of orderArr) {
      totalPrice = totalPrice + x.totalBillAmount;
    }

    let formattedTot = numberWithCommas(totalPrice);
    setNetTotal(formattedTot);
    return formattedTot;
  };

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
    },
    pdf: {
      width: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      textAlign: "center",
      fontSize: "10px",
    },
    mainTitle: {
      textAlign: "center",
      fontSize: "20px",
      marginTop: "20px",
      gridTemplateColumns: "auto auto auto",
    },
    row: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      paddingLeft: 25,
      paddingRight: 20,
      marginBottom: 10,
    },
    block: {
      width: "25%",
      fontSize: "12px",
      padding: 10,
    },
    blockData: {
      width: "25%",
      fontSize: "10px",
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 5,
    },
    total: {
      textAlign: "right",
      fontSize: 14,
      color: "#2980B9",
      marginRight: 50,
      marginTop: 10,
      marginBottom: 10,
    },
  });
  return (
    <PDFViewer style={styles.pdf} className="h-screen">
      <Document>
        <Page style={styles.mainTitle}>
          <Text>Summary of Orders Placed</Text>
          <Text> </Text>
          <View style={styles.row}>
            <Text style={styles.block}>ID</Text>
            <Text style={styles.block}>Date</Text>
            <Text style={styles.block}>Products</Text>
            <Text style={styles.block}>Total Qty</Text>
            <Text style={styles.block}>Unit Price</Text>
            <Text style={styles.block}>Total Amount</Text>
          </View>
          {orders.map((orderItem) => (
            <>
              {orderItem.status && (
                <View style={styles.row}>
                  <Text style={styles.blockData}>
                    {orderItem._id.substring(20).toUpperCase()}
                  </Text>
                  <Text style={styles.blockData}>{orderItem.purchaseDate}</Text>
                  <Text style={styles.blockData}>
                    {orderItem.products.map((product) => (
                      <div className="pt-4 pb-4 m-auto text-gray-900">
                        <div className="pt-4 pb-4 m-auto text-gray-900">
                          {product.productName}
                          {"\n"}
                        </div>
                      </div>
                    ))}
                  </Text>

                  <Text style={styles.blockData}>
                    {orderItem.products.map((product) => (
                      <div className="pt-4 pb-4 m-auto text-gray-900">
                        <div className="pt-4 pb-4 m-auto text-gray-900">
                          {calculateTotalProductQty(product)}
                        </div>
                      </div>
                    ))}
                  </Text>

                  <Text style={styles.blockData}>
                    {orderItem.products.map((product) => (
                      <div className="pt-4 pb-4 m-auto text-gray-900">
                        <div className="pt-4 pb-4 m-auto text-gray-900">
                          {numberWithCommas(product.pricePerUnit)}.00
                          {"\n"}
                        </div>
                      </div>
                    ))}
                  </Text>

                  <Text style={styles.blockData}>
                    {numberWithCommas(orderItem.totalBillAmount)}.00
                  </Text>
                </View>
              )}
            </>
          ))}
          <View style={styles.total}>
            <Text> </Text>
            <Text>Net Summary = {netTotal}.00 /=</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default OrderReport;
