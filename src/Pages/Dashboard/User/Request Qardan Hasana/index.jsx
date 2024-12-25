import React, { useState, useEffect } from "react";
import { generatePDFUrl } from "./formPDF";
import { useForm } from "react-hook-form";
import { PageLayout } from "../../../../Components/Layout/Page Layout";
import { Input, Loader } from "../../../../Components/Shared";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const RequestQardanHasana = () => {
  const { control, handleSubmit, reset } = useForm();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    // Check existing submission status
    const existingSubmission = localStorage.getItem("qardanHasanaSubmission");
    if (existingSubmission) {
      const submission = JSON.parse(existingSubmission);
      setFormStatus(submission.status);
      if (submission.pdfUrl) {
        setPdfUrl(submission.pdfUrl);
      }
    }
  }, []);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowModal(true);
  };

  const confirmSubmission = async () => {
    setShowModal(false);
    setIsLoading(true);

    setTimeout(async () => {
      const generatedPdfUrl = await generatePDFUrl(formData);

      // Store submission in localStorage
      const submission = {
        data: formData,
        status: "pending",
        submitDate: new Date().toISOString(),
        pdfUrl: generatedPdfUrl,
      };
      localStorage.setItem(
        "qardanHasanaSubmission",
        JSON.stringify(submission)
      );

      setPdfUrl(generatedPdfUrl);
      setFormStatus("pending");
      setIsLoading(false);
    }, 2500);
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

  const getStatusMessage = () => {
    if (formStatus === "pending") {
      return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-md">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Your request is currently under process. You cannot submit a new
                entry until this request is either approved or rejected by the
                administrator, or your current installment is completed.
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <PageLayout
      pageTitle="Request Qardan Hasana"
      pageHeading="Request Qardan Hasana"
    >
      <section className="w-full bg-primary h-full lg:h-[100vh] lg:overflow-y-scroll rounded-md p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-md">
        {getStatusMessage()}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col justify-between gap-10 h-fit"
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
            {!formStatus && (
              <button
                type="submit"
                className="px-10 py-3 rounded-md text-white bg-its-btn-primary-color hover:bg-primary-dark flex justify-center items-center gap-3"
              >
                <span>Submit</span>
                {isLoading && <Loader />}
              </button>
            )}
          </div>
        </form>
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4 text-gray-400 w-12 h-12"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500">
                    Have you filled all details properly?
                  </h3>
                  <button
                    onClick={confirmSubmission}
                    type="button"
                    className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                  >
                    Yes, proceed
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </PageLayout>
  );
};
