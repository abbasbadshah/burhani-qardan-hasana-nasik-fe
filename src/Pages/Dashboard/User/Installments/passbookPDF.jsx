import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableCell: {
    margin: 5,
    padding: 5,
    flex: 1,
    borderRightWidth: 1,
    borderColor: "#bfbfbf",
  },
});

export const PassbookPDF = ({ userData, installmentsData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Installment Passbook</Text>

      <View style={styles.section}>
        <Text>
          Name: {userData.name} {userData.surname}
        </Text>
        <Text>Sabil Number: {userData.sabilnumber}</Text>
        <Text>ITS Number: {userData.ITSNumber}</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Date</Text>
          <Text style={styles.tableCell}>Amount</Text>
          <Text style={styles.tableCell}>Status</Text>
          <Text style={styles.tableCell}>Method</Text>
        </View>
        {installmentsData.map((installment, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{installment.date}</Text>
            <Text style={styles.tableCell}>₹{installment.amount}</Text>
            <Text style={styles.tableCell}>{installment.status}</Text>
            <Text style={styles.tableCell}>{installment.method}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
