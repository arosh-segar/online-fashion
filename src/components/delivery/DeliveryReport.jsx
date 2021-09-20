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

const DeliveryReport = (props) => {
   
    const [orders] = useState(props.location.state.order)
    const [search] = useState(props.location.state.filter)

   
    

  
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
          <Text>Summary of deliverd orders</Text>

          <View style={styles.section}>
            <Text>Summary of deliverd orders</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.block}>DELIVERY ID</Text>
            <Text style={styles.block}>ORDER ID</Text>
            <Text style={styles.block}>ORDER DATE</Text>
            <Text style={styles.block}>DELIVERY ADDRESS</Text>
            <Text style={styles.block}>DELIVERY DATE</Text>
            <Text style={styles.block}>VEHICLE NUMBER</Text>
          </View>
          {orders.map((order) => (
            <>{order.deliveryDate.includes(search) && <View style={styles.row}>
            <Text style={styles.blockData}>
              {order._id.substr(order._id.length - 4)}
            </Text>
            <Text style={styles.blockData}>
              {order.orderId}
            </Text>
            <Text style={styles.blockData}>
              {order.orderDate}
            </Text>
            <Text style={styles.blockData}>
              {order.location}
            </Text>
            <Text style={styles.blockData}>
              {order.deliveryDate}
            </Text>
            <Text style={styles.blockData}>
              {order.vehicleNumber}
            </Text>
          </View>}
                
              
            </>
          ))}
          
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default DeliveryReport;