import React, { useMemo, useState } from "react";
import { PageLayout } from "../../../../Components/Layout/Page Layout";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PassbookPDF } from "./passbookPDF";
import { userData, initialInstallmentsData } from "./installmentData";
import {
  UserCircleIcon,
  CreditCardIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  InformationCircleIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { DocumentArrowDownIcon, UserIcon } from "@heroicons/react/24/outline";

export const UserInstallment = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [installmentsData, setInstallmentsData] = useState(
    initialInstallmentsData
  );

  const totalCalculations = useMemo(() => {
    const paidInstallments = installmentsData.filter(
      (installment) => installment.status === "paid"
    );
    const upcomingInstallments = installmentsData.filter(
      (installment) => installment.status === "upcoming"
    );

    const totalPaid = paidInstallments.reduce(
      (sum, installment) => sum + installment.amount,
      0
    );
    const totalPending = upcomingInstallments.reduce(
      (sum, installment) => sum + installment.amount,
      0
    );

    return {
      totalPaid,
      totalPending,
      percentagePaid: (totalPaid / userData.totalAmount) * 100,
      allPaid: totalPending === 0,
    };
  }, [installmentsData]);

  const filterInstallments = (status) => {
    if (status === "all") return installmentsData;
    return installmentsData.filter(
      (installment) => installment.status === status
    );
  };

  const filteredInstallments = filterInstallments(selectedFilter);

  return (
    <PageLayout pageHeading={"Installment"} pageTitle={"Installment"}>
      <section
        className="w-full bg-primary h-full lg:h-[100vh] lg:overflow-y-scroll rounded-md flex flex-col lg:flex-row gap-6 p-6 
        lg:p-6 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]"
      >
        <div
          className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6 
          flex flex-col items-center space-y-4 md:space-y-6"
        >
          <div className="relative group">
            <UserCircleIcon
              className="w-24 md:w-32 h-24 md:h-32 text-gray-400 
              group-hover:text-primary transition-colors"
            />
            <div
              className="absolute bottom-0 right-0 bg-primary text-white 
              rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
            >
              <CreditCardIcon className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
            {userData.name} {userData.surname}
          </h2>

          <div className="w-full space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm md:text-base">
              <div className="flex items-center text-gray-600">
                <UserCircleIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" />
                <span>Sabil Number</span>
              </div>
              <span className="font-semibold text-right">
                {userData.sabilnumber}
              </span>
              <div className="flex items-center text-gray-600">
                <UserIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-its-btn-primary-color" />
                <span>ITS Number</span>
              </div>
              <span className="font-semibold text-right">
                {userData.ITSNumber}
              </span>
              <div className="flex items-center text-gray-600">
                <CreditCardIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" />
                <span>Total Installments</span>
              </div>
              <span className="font-semibold text-right">
                {userData.totalInstallments}
              </span>
            </div>
          </div>
          <div className="w-full bg-[#F1F5F9] rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-its-btn-primary-color">
                <ChartBarIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="font-semibold text-sm md:text-base">
                  Qardan Installment Overview
                </span>
              </div>
              <InformationCircleIcon className="w-4 h-4 md:w-5 md:h-5 text-its-btn-primary-color" />
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Total Paid</p>
                <p className="font-bold text-primary">
                  ₹{totalCalculations.totalPaid.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs md:text-sm text-gray-600">
                  Remaining Balance
                </p>
                <p className="font-bold text-red-600">
                  ₹{totalCalculations.totalPending.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-full"
                style={{ width: `${totalCalculations.percentagePaid}%` }}
              />
            </div>

            <PDFDownloadLink
              document={
                <PassbookPDF
                  userData={userData}
                  installmentsData={installmentsData}
                />
              }
              fileName={`${userData.name}_installment_passbook.pdf`}
              className="w-full mt-2 bg-primary text-white py-2 rounded-lg 
              flex items-center justify-center hover:bg-its-btn-primary-color 
              transition-colors text-sm md:text-base"
            >
              {({ loading }) => (
                <>
                  <DocumentArrowDownIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {loading ? "Generating PDF..." : "Download Passbook"}
                </>
              )}
            </PDFDownloadLink>

            {totalCalculations.allPaid && (
              <div
                className="w-full mt-2 bg-green-100 text-green-700 
              py-2 rounded-lg text-center text-sm md:text-base"
              >
                All Qardan installments have been settled now.
              </div>
            )}
          </div>
        </div>

        <div
          className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg 
          pb-6 px-4 md:px-6 space-y-4 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-its-btn-primary-color [&::-webkit-scrollbar-thumb]:rounded-md"
        >
          <div
            className="sticky top-0 bg-white z-10 
            flex flex-col md:flex-row justify-between items-center 
            mb-4 border-b pb-2 space-y-2 md:space-y-0 h-16"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Installment History
            </h3>
            <div className="flex space-x-2">
              {["all", "paid", "upcoming"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded-full 
                  text-xs md:text-sm capitalize 
                  ${
                    selectedFilter === filter
                      ? "bg-primary text-white"
                      : "bg-its-btn-primary-color text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:space-y-4">
            {filteredInstallments.length > 0 ? (
              filteredInstallments.map((installment, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start 
                  md:items-center justify-between bg-gray-50 p-3 
                  md:p-4 rounded-lg hover:bg-gray-100 
                  transition-colors group space-y-2 md:space-y-0"
                >
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <div className="text-left">
                      <span className="font-medium text-primary text-sm md:text-base block">
                        {installment.date}
                      </span>
                      <span className="text-xs text-primary">
                        {installment.method}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-4">
                    <span className="font-semibold text-gray-800 text-sm md:text-base">
                      ₹{installment.amount}
                    </span>

                    {installment.status === "paid" ? (
                      <div className="flex items-center text-primary text-sm md:text-base">
                        <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 mr-1" />
                        Paid
                      </div>
                    ) : (
                      <div className="flex items-center text-yellow-600 text-sm md:text-base">
                        <ClockIcon className="w-5 h-5 md:w-6 md:h-6 mr-1" />
                        Upcoming
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-4">
                No installments found for the selected filter.
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
