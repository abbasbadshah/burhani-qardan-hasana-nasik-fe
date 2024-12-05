import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

export const GeneratePDF = async (data) => {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
    },
    title: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: "center",
      fontWeight: "bold",
    },
    section: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 14,
      marginBottom: 5,
      fontWeight: "bold",
    },
    row: {
      flexDirection: "row",
      marginBottom: 5,
    },
    label: {
      width: "40%",
      fontWeight: "bold",
    },
    value: {
      width: "60%",
    },
  });

  // Create PDF Document
  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Qardan Hasana Request Form</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Details</Text>
          {[
            { label: "First Name", key: "firstname" },
            { label: "Last Name", key: "lastname" },
            { label: "Sabil Number", key: "sabilnumber" },
            { label: "ITS Number", key: "itsnumber" },
            { label: "Phone Number", key: "phone-number" },
            { label: "Email Address", key: "email-address" },
            { label: "Qardan Hasana For", key: "require-qardan-hasana-for" },
            { label: "Gold Deposit (gm)", key: "gold-deport-in-gm" },
            { label: "Needed Qardan Amount", key: "needed-qardan-amount" },
            {
              label: "Installment Period",
              key: "installment-to-paying-amount",
            },
          ].map(({ label, key }) => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{label}:</Text>
              <Text style={styles.value}>{data[key] || "N/A"}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Guarantor Details</Text>
          {[
            { label: "First Guarantor", key: "first-guarantor-name" },
            { label: "Second Guarantor", key: "second-guarantor-name" },
            { label: "Third Guarantor", key: "third-guarantor-name" },
            { label: "Fourth Guarantor", key: "fouth-guarantor-name" },
          ].map(({ label, key }) => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{label}:</Text>
              <Text style={styles.value}>{data[key] || "N/A"}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  // Generate PDF
  const pdfBlob = await pdf(MyDocument).toBlob();
  return URL.createObjectURL(pdfBlob);
};
