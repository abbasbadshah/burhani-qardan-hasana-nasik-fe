import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PageLayout } from "../../../../Components/Layout/Page Layout";
import { Input, GeneratePDF } from "../../../../Components/Shared";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const RequestQardanHasana = () => {
  const { control, handleSubmit } = useForm();
  const [pdfUrl, setPdfUrl] = useState(null);

  const onSubmit = async (data) => {
    console.log("Request Qardan Hasana:", data);
    const generatedPdfUrl = await GeneratePDF(data);
    if (generatedPdfUrl) {
      setPdfUrl(generatedPdfUrl);
    }
  };

  const downloadPDF = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Qardan_Hasana_Request.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <PageLayout
      pageTitle="Request Qardan Hasana"
      pageHeading="Request Qardan Hasana"
    >
      <section className="w-full bg-primary h-full lg:h-[100vh] lg:overflow-y-scroll rounded-md p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between gap-10 h-full"
        >
          <div>
            <h2 className="text-white text-base lg:text-2xl text-left mb-1">
              Basic Details
            </h2>
            <hr className="border-gray-300 mb-5" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              <Input
                control={control}
                name={"firstname"}
                placeholder={"Enter Your First Name"}
                required
                type="text"
                label={"First Name"}
                dark={true}
                autoComplete={"firstname"}
              />
              <Input
                control={control}
                name={"lastname"}
                label={"Last Name"}
                placeholder={"Enter Your Last Name"}
                required
                type="text"
                dark={true}
                autoComplete={"lastname"}
              />
              <Input
                control={control}
                name={"sabilnumber"}
                label={"Sabil Number"}
                placeholder={"Enter Your Sabil Number"}
                required
                type="text"
                dark={true}
                autoComplete={"sabilnumber"}
              />
              <Input
                control={control}
                name={"itsnumber"}
                label={"ITS Number"}
                placeholder={"Enter Your ITS Number"}
                required
                type="text"
                dark={true}
                autoComplete={"itsnumber"}
              />
              <Input
                control={control}
                name={"phone-number"}
                label={"Phone Number"}
                placeholder={"Enter Your Phone Number"}
                required
                type="tel"
                dark={true}
                autoComplete={"phone-number"}
              />
              <Input
                control={control}
                name={"email-address"}
                label={"Email Address"}
                placeholder={"Enter your email Address"}
                required
                type="email"
                dark={true}
                autoComplete={"email-address"}
              />
              <Input
                type="select"
                name="require-qardan-hasana-for"
                label="Require Qardan Hasana For ?"
                control={control}
                required
                options={[
                  { value: "forshop", label: "Shop" },
                  { value: "forhome", label: "Home" },
                  { value: "loantoberepaid", label: "Loan to be repaid" },
                ]}
                placeholder="Choose Options"
                dark={true}
              />
              <Input
                control={control}
                name={"gold-deport-in-gm"}
                label={"Gold Deposit (Add in gram)"}
                placeholder={"Enter Your Gold Deposit Amount"}
                required
                type="text"
                dark={true}
                autoComplete={"gold-deport-in-gm"}
              />
              <Input
                control={control}
                name={"needed-qardan-amount"}
                label={"Needed Qardan Amount"}
                placeholder={"Enter Your Needed Qardan Amount"}
                required
                type="text"
                dark={true}
                autoComplete={"needed-qardan-amount"}
              />
              <Input
                type="select"
                name="installment-to-paying-amount"
                label="Insatallment to pay amount"
                control={control}
                required
                options={[
                  { value: "three-months", label: "Three Months" },
                  { value: "six-months", label: "Six Months" },
                  { value: "eight-months", label: "Eight Months" },
                  { value: "ten-months", label: "Ten Months" },
                  { value: "twelve-months", label: "Twelve Months" },
                  { value: "eighteen-months", label: "Eighteen Months" },
                ]}
                placeholder="Choose Months"
                dark={true}
              />
              <Input
                type="file"
                name="authority-signature"
                label="Authority Signature"
                control={control}
                dark={true}
                placeholder="Select a file"
              />
            </div>
            <h2 className="text-white text-base lg:text-2xl text-left mt-5 mb-1">
              Guarantor's Details
            </h2>
            <hr className="border-gray-300 mb-5" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              <Input
                control={control}
                name={"first-guarantor-name"}
                placeholder={"Enter Your First Guarantor Name"}
                required
                type="text"
                label={"First Guarantor Name"}
                dark={true}
                autoComplete={"first-guarantor-name"}
              />
              <Input
                control={control}
                name={"second-guarantor-name"}
                label={"Second Guarantor Name"}
                placeholder={"Enter Your Second Guarantor Name"}
                required
                type="text"
                dark={true}
                autoComplete={"second-guarantor-name"}
              />
              <Input
                control={control}
                name={"third-guarantor-name"}
                label={"Third Guarantor Name"}
                placeholder={"Enter Your Third Guarantor Name"}
                type="text"
                dark={true}
                autoComplete={"third-guarantor-name"}
              />
              <Input
                control={control}
                name={"fouth-guarantor-name"}
                label={"Fourth Guarantor Name"}
                placeholder={"Enter Your Fourth Guarantor Name"}
                type="text"
                dark={true}
                autoComplete={"fouth-guarantor-name"}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            {pdfUrl && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={downloadPDF}
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  <ArrowDownTrayIcon className="w-5" />
                  Download Form
                </button>
              </div>
            )}
            <button
              type="submit"
              className="px-10 py-3 rounded-md text-white bg-its-btn-primary-color hover:bg-primary-dark"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </PageLayout>
  );
};
