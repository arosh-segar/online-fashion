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

const StockReport = () => {
  const [stockRequests, setStockRequests] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/inventory/stockRequests`)
      .then((response) => {
        setStockRequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculateTotalQty = (stock) => {
    let totalQty = 0;

    if (stock.sizes.xs) {
      totalQty = parseFloat(totalQty) + parseFloat(stock.sizes.xs);
    }

    if (stock.sizes.s) {
      totalQty = parseFloat(totalQty) + parseFloat(stock.sizes.s);
    }

    if (stock.sizes.m) {
      totalQty = parseFloat(totalQty) + parseFloat(stock.sizes.m);
    }

    if (stock.sizes.l) {
      totalQty = parseFloat(totalQty) + parseFloat(stock.sizes.l);
    }

    if (stock.sizes.xl) {
      totalQty = parseFloat(totalQty) + parseFloat(stock.sizes.xl);
    }

    return totalQty;
  };

  const calculateTotalPrice = (stock, totalQty) => {
    let totalPrice = 0;

    if (stock.pricePerUnit) {
      totalPrice = totalQty * parseFloat(stock.pricePerUnit);
    }
    return totalPrice;
  };

  const acceptedTotal = stockRequests.reduce(function (prev, current) {
    if (current.status === "accepted") {
      const totalQty = calculateTotalQty(current);

      let totalPrice = calculateTotalPrice(current, totalQty);
      if (current.pricePerUnit) {
        totalPrice = totalQty * parseFloat(current.pricePerUnit);
      }

      return prev + +totalPrice;
    } else {
      return prev + +0;
    }
  }, 0);

  const pendingTotal = stockRequests.reduce(function (prev, current) {
    if (current.status === "pending") {
      const totalQty = calculateTotalQty(current);

      let totalPrice = calculateTotalPrice(current, totalQty);
      if (current.pricePerUnit) {
        totalPrice = totalQty * parseFloat(current.pricePerUnit);
      }

      return prev + +totalPrice;
    } else {
      return prev + +0;
    }
  }, 0);

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
      paddingLeft: 40,
      paddingRight: 40,
      marginBottom: 10,
    },
    block: {
      width: "25%",
      fontSize: "12px",
      padding: 20,
    },
    blockData: {
      width: "25%",
      fontSize: "10px",
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 5,
    },
    total: {
      textAlign: "right",
      fontSize: 11,
      marginRight: 85,
      marginTop: 10,
      marginBottom: 10,
    },
  });
  return (
    <PDFViewer style={styles.pdf} className="h-screen">
      <Document>
        <Page style={styles.mainTitle}>
          <Text>Summary of received stocks</Text>

          <View style={styles.section}>
            <Text>Summary of received stocks</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.block}>Product Code</Text>
            <Text style={styles.block}>Product Name</Text>
            <Text style={styles.block}>Total Quantity</Text>
            <Text style={styles.block}>Total Cost Per Product</Text>
          </View>
          {stockRequests.map((stockRequest) => (
            <>
              {stockRequest.status === "pending" && (
                <View style={styles.row}>
                  <Text style={styles.blockData}>
                    {stockRequest._id.substring(17, 23).toUpperCase()}
                  </Text>
                  <Text style={styles.blockData}>
                    {stockRequest.productName}
                  </Text>
                  <Text style={styles.blockData}>
                    {calculateTotalQty(stockRequest)}
                  </Text>
                  <Text style={styles.blockData}>
                    {calculateTotalPrice(
                      stockRequest,
                      calculateTotalQty(stockRequest)
                    )}
                    .00
                  </Text>
                </View>
              )}
            </>
          ))}
          <View style={styles.total}>
            <Text>Total Cost = {pendingTotal}.00</Text>
          </View>
          <View style={styles.section}>
            <Text>Summary of received stocks</Text>
          </View>
          {stockRequests.map((stockRequest) => (
            <>
              {stockRequest.status === "accepted" && (
                <View style={styles.row}>
                  <Text style={styles.blockData}>
                    {stockRequest._id.substring(17, 23).toUpperCase()}
                  </Text>
                  <Text style={styles.blockData}>
                    {stockRequest.productName}
                  </Text>
                  <Text style={styles.blockData}>
                    {calculateTotalQty(stockRequest)}
                  </Text>
                  <Text style={styles.blockData}>
                    {calculateTotalPrice(
                      stockRequest,
                      calculateTotalQty(stockRequest)
                    )}
                    .00
                  </Text>
                </View>
              )}
            </>
          ))}
          <View style={styles.total}>
            <Text>Total Cost = {acceptedTotal}.00</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default StockReport;
