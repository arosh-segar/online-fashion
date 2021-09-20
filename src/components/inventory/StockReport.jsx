import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const StockReport = () => {
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
          <View style={styles.row}>
            <Text style={styles.blockData}>Product Code</Text>
            <Text style={styles.blockData}>Product Name</Text>
            <Text style={styles.blockData}>Total Quantity</Text>
            <Text style={styles.blockData}>200.00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.blockData}>Product Code</Text>
            <Text style={styles.blockData}>Product Name</Text>
            <Text style={styles.blockData}>Total Quantity</Text>
            <Text style={styles.blockData}>1200.00</Text>
          </View>
          <View style={styles.total}>
            <Text>Total Cost = 1200.00</Text>
          </View>
          <View style={styles.section}>
            <Text>Summary of pending stocks</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default StockReport;
