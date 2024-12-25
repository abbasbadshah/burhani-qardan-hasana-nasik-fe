import React from "react";
import { Page, Text, View, Document, StyleSheet, pdf } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  orgName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    padding: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    width: "30%",
    fontWeight: "bold",
  },
  value: {
    width: "70%",
  },
  signatureSection: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signatureBox: {
    width: "45%",
    borderTopWidth: 1,
    paddingTop: 5,
    textAlign: "center",
  },
});

export const GeneratePDF = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.orgName}>Burhani Qardan Hasana</Text>
          <Text style={styles.contactInfo}>
            123 Main Street, City Name - 12345{"\n"}
            Phone: +1 234 567 8900 | Email: contact@burhaniqardan.org{"\n"}
            Registration No: BQH123456
          </Text>
        </View>

        {/* Basic Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}>
              {formData.firstname} {formData.lastname}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Sabil Number:</Text>
            <Text style={styles.value}>{formData.sabilnumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ITS Number:</Text>
            <Text style={styles.value}>{formData.itsnumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>
              {formData["phone-number"]}
              {"\n"}
              {formData["email-address"]}
            </Text>
          </View>
        </View>

        {/* Loan Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Loan Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Purpose:</Text>
            <Text style={styles.value}>
              {formData["require-qardan-hasana-for"]}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Gold Deposit:</Text>
            <Text style={styles.value}>{formData["gold-deport-in-gm"]} gm</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Loan Amount:</Text>
            <Text style={styles.value}>{formData["needed-qardan-amount"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Installment Period:</Text>
            <Text style={styles.value}>
              {formData["installment-to-paying-amount"]}
            </Text>
          </View>
        </View>

        {/* Guarantor Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Guarantor Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>First Guarantor:</Text>
            <Text style={styles.value}>{formData["first-guarantor-name"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Second Guarantor:</Text>
            <Text style={styles.value}>
              {formData["second-guarantor-name"]}
            </Text>
          </View>
          {formData["third-guarantor-name"] && (
            <View style={styles.row}>
              <Text style={styles.label}>Third Guarantor:</Text>
              <Text style={styles.value}>
                {formData["third-guarantor-name"]}
              </Text>
            </View>
          )}
          {formData["fourth-guarantor-name"] && (
            <View style={styles.row}>
              <Text style={styles.label}>Fourth Guarantor:</Text>
              <Text style={styles.value}>
                {formData["fourth-guarantor-name"]}
              </Text>
            </View>
          )}
        </View>

        {/* Signature Section */}
        <View style={styles.signatureSection}>
          <View style={styles.signatureBox}>
            <Text>Applicant's Signature</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text>Authorized Signature</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Function to generate and return PDF URL
export const generatePDFUrl = async (formData) => {
  try {
    const blob = await pdf(<GeneratePDF formData={formData} />).toBlob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return null;
  }
};
