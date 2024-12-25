import {
  CreditCardIcon,
  MapIcon,
  UserCircleIcon,
  UserIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { PageLayout } from "../../Components/Layout/Page Layout";

export const FrontPage = () => {
  return (
    <PageLayout
      pageTitle="Burhani Qardan Hasana Trust Nasik"
      pageHeading="Welcome to Burhani Qardan Hasana Trust Nasik"
    >
      <section className="w-full bg-primary h-full lg:h-[100vh] lg:overflow-y-scroll rounded-md p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div className="items-center flex">
            <div className="text-left">
              <h1 className="text-white text-3xl mb-5 font-bold">
                Burhani Qardan Hasana Trust
              </h1>
              <p className="text-white text-lg mb-5">
                Burhani Qardan Hasana Trust Nasik is a non-profit organization
                dedicated to promoting social and environmental causes. Our
                mission is to provide financial assistance to people in need and
                to promote sustainable development.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-md" id="video">
            <iframe
              width="100%"
              height="400"
              className="rounded-md"
              src="https://www.youtube.com/embed/lZP-w1byV7U?si=jK7T2JYA-eylKC-d"
              title="Burhani Qardan Hasana Trust Nasik"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20">
          {/* First Block - Personal Info */}
          <div className="flex flex-col justify-between bg-white rounded-md h-[300px] p-6">
            <span className="flex gap-5 items-center justify-center p-2 bg-primary rounded-full">
              <UserIcon className="w-10 text-white" />
              <p className="text-lg font-medium text-white">
                Mulla Taher Bhai kapasi
              </p>
            </span>
            <span className="flex gap-5 items-center">
              <UserCircleIcon className="w-10 text-its-btn-primary-color" />
              <p className="text-lg font-medium">ITS: 30401236</p>
            </span>
            <span className="flex gap-5 items-center">
              <MapIcon className="w-10 text-its-btn-primary-color" />
              <p className="text-lg font-medium">Mohallah: Qutbi Mh. Naik</p>
            </span>
            <span className="flex gap-5 items-center">
              <CreditCardIcon className="w-10 text-its-btn-primary-color" />
              <p className="text-lg font-medium">Sabil: 175332</p>
            </span>
          </div>

          {/* Second Block - Qardan Hasana Statistics */}
          <div className="flex flex-col justify-between bg-white rounded-md h-[300px] p-6">
            <h3 className="text-xl font-bold text-center mb-4">
              Qardan Hasana Status
            </h3>
            <span className="flex gap-5 items-center">
              <ChartBarIcon className="w-10 text-its-btn-primary-color" />
              <p className="text-lg font-medium">Total Taken: 10</p>
            </span>
            <span className="flex gap-5 items-center">
              <ChartBarIcon className="w-10 text-green-500" />
              <p className="text-lg font-medium">Completed: 9</p>
            </span>
            <span className="flex gap-5 items-center">
              <ChartBarIcon className="w-10 text-yellow-500" />
              <p className="text-lg font-medium">In Progress: 1</p>
            </span>
          </div>

          {/* Third Block - Current Qardan Details */}
          <div className="flex flex-col justify-between bg-white rounded-md h-[300px] p-6">
            <h3 className="text-xl font-bold text-center mb-4">
              Current Qardan Status
            </h3>
            <span className="flex gap-5 items-center">
              <CurrencyDollarIcon className="w-10 text-its-btn-primary-color" />
              <p className="text-lg font-medium">Amount: ₹15,00,000</p>
            </span>
            <div className="flex flex-col gap-2">
              <span className="flex gap-5 items-center">
                <CurrencyDollarIcon className="w-10 text-green-500" />
                <div>
                  <p className="text-lg font-medium">Paid: 10 installments</p>
                  <p className="text-sm text-gray-600">₹10,00,000</p>
                </div>
              </span>
              <span className="flex gap-5 items-center">
                <CurrencyDollarIcon className="w-10 text-yellow-500" />
                <div>
                  <p className="text-lg font-medium">
                    Remaining: 5 installments
                  </p>
                  <p className="text-sm text-gray-600">₹5,00,000</p>
                </div>
              </span>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Completing: 15 Jan 2025
            </p>
          </div>

          {/* Fourth Block - Guarantors */}
          <div className="flex flex-col bg-white rounded-md h-[300px] p-6">
            <h3 className="text-xl font-bold text-center mb-4">
              Your Guarantors
            </h3>
            <div className="space-y-4 mt-5">
              <span className="flex gap-5 items-center">
                <UserGroupIcon className="w-10 text-its-btn-primary-color" />
                <div>
                  <p className="text-lg font-medium">Abbas</p>
                  <p className="text-sm text-gray-600">ITS: 20202002</p>
                </div>
              </span>
              <span className="flex gap-5 items-center">
                <UserGroupIcon className="w-10 text-its-btn-primary-color" />
                <div>
                  <p className="text-lg font-medium">Moham</p>
                  <p className="text-sm text-gray-600">ITS: 25874125</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
