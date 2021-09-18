import React, {useEffect, useState} from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";

import {useParams} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../constants";

const OrderReport = (props) => {
    const styles = StyleSheet.create({
        page: {
            backgroundColor: "#E4E4E4",
        },
        pdf: {
            width: "100%",
        },
        section: {
            margin: 10,
            padding: 15,
            textAlign: "left",
            fontSize: "12px",
            marginLeft:"110px"
        },
        mainTitle: {
            textAlign: "center",
            fontSize: "20px",
            marginTop: "150px",
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


    const [order,setOrder] = useState({})
    const [supplier,setSupplier] = useState({})
    const [items,setItems] = useState([])
    const params = useParams()

    useEffect(() =>{

        axios.get(`${API_URL}/supplier/getOrders`)
            .then((response)=>{
                response.data.map(order => {
                    if(order.id == params.id){
                        setOrder(order)
                        setSupplier(order.supplier)
                        setItems(order.items)
                    }

                })
            })
            .catch((error)=>{
                console.log(error)
            })

    },[])
    console.log(supplier)


    return (
        <PDFViewer style={styles.pdf} className="h-screen">
            <Document>
                <Page style={styles.mainTitle}>
                    <Text>Purchase Order</Text>
                    <View style={styles.section}>
                        <Text>Order No:{order.id}</Text>
                        <Text>Supplier No:{supplier.id}</Text>
                        <Text>Address:{supplier.address}</Text>
                        <Text>Date:{order.orderedDate}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.block}>Product Code</Text>
                        <Text style={styles.block}>Product Name</Text>
                        <Text style={styles.block}>Size & Qty</Text>
                    </View>
                    {items.map(item=>{
                        return(
                            <View style={styles.row}>
                                <Text style={styles.blockData}>{item.productID}</Text>
                                <Text style={styles.blockData}>{item.productName}</Text>
                                <Text style={styles.blockData}>
                                    {item.sizes.xs && <Text>XS - {item.sizes.xs}</Text>}
                                    {item.sizes.s && <Text>S - {item.sizes.s}</Text>}
                                    {item.sizes.m && <Text>M - {item.sizes.m}</Text>}
                                    {item.sizes.l && <Text>L - {item.sizes.l}</Text>}
                                    {item.sizes.xl && <Text>XL - {item.sizes.xl}</Text>}
                                    </Text>
                            </View>
                    )})}
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default OrderReport;
