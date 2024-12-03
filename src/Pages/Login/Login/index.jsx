import { Link } from "react-router-dom";
import ITSLogin from "../../../Assets/Images/ITS/itswhite-logo.png";
import QardanHasanaLogo from "../../../Assets/Images/Logo/qardanhassanalogo.png";
import { PageLayout } from "../../../Components/Layout/Page Layout";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
export const Login = () => {
  return (
    <PageLayout pageTitle="Login">
      <section className="bg-primary">
        <div className="flex flex-col lg:flex-row justify-between min-h-screen">
          {/* Left - Scrollable */}
          <div className="lg:w-1/2 px-5 xl:pl-12 pt-10 overflow-y-auto max-h-screen scrollbar-left">
            <div className="min-h-full flex flex-col">
              <Link className="shrink-0" to="/">
                <img src={QardanHasanaLogo} className="w-32" alt="Logo" />
              </Link>
              <div className="max-w-[450px] m-auto w-full py-16 flex-grow">
                <header className="text-center mb-8">
                  <h2 className="text-text-dark text-4xl font-semibold font-poppins mb-2">
                    Login Burhani Qardan Hasana Nasik Portal
                  </h2>
                </header>
                <div className="w-full">
                  <Link
                    to="/login-with-its/"
                    className="inline-flex justify-center items-center gap-x-2 border border-white rounded-lg px-6 py-4 text-base text-gray-900 font-medium transition-colors"
                  >
                    <img
                      src={ITSLogin}
                      width="100%"
                      height="100%"
                      className="w-6"
                      alt="ITS Login"
                    />
                    <span className="text-text-dark"> Login with ITS </span>
                  </Link>
                </div>
                <div className="relative mt-6 mb-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-base text-gray-600">
                      Or continue with
                    </span>
                  </div>
                </div>
                <form action="">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="text-gray-800 text-base border border-gray-300 h-14 w-full focus:border-green-500 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-gray-500 placeholder:text-base"
                      placeholder="Sabil Number"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <input
                      type="password"
                      className="text-gray-800 text-base border border-gray-300 h-14 w-full focus:border-green-500 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-gray-500 placeholder:text-base"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="absolute top-4 right-4 bottom-4"
                    >
                      <EyeIcon className="w-6" />
                    </button>
                  </div>
                  <div className="flex justify-between mb-7">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 focus:ring-transparent rounded-full border border-gray-300 focus:accent-green-500 text-green-500"
                        name="remember"
                        id="remember"
                      />
                      <label
                        htmlFor="remember"
                        className="text-text-dark text-base font-semibold"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <Link
                        to="/forgot-password/"
                        data-target="#multi-step-modal"
                        className="modal-open text-text-dark font-semibold text-base underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-3.5 flex items-center justify-center text-white font-bold bg-[#B88029] hover:bg-amber-700 transition-colors rounded-lg w-full"
                  >
                    Login
                  </button>
                </form>
                <p className="text-center text-text-dark text-base font-medium pt-7">
                  Don't have an account?
                  <Link
                    to="/register/"
                    className="font-semibold text-text-dark underline ml-1"
                  >
                    Register
                  </Link>
                </p>
                <nav className="flex items-center justify-center flex-wrap gap-x-11 pt-24">
                  <Link to="#" className="text-sm text-text-dark">
                    Terms &amp; Condition
                  </Link>
                  <Link to="#" className="text-sm text-text-dark">
                    Privacy Policy
                  </Link>
                  <Link to="#" className="text-sm text-text-dark">
                    Help
                  </Link>
                  <Link to="#" className="text-sm text-text-dark">
                    English
                  </Link>
                </nav>
                <p className="text-text-dark text-center text-sm mt-6">
                  @ 2024 Burhani Qardan Hasana Nasik. All Right Reserved.
                </p>
              </div>
            </div>
          </div>
          {/* Right - Fixed Image */}
          <div className="lg:w-1/2 h-screen lg:block hidden bg-[#F6FAFF] bg-login-bg bg-no-repeat bg-cover p-20 fixed right-0 top-0" />
        </div>
      </section>
    </PageLayout>
  );
};
