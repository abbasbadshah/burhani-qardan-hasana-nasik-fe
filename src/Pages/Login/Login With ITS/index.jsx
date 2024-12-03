import { Link } from "react-router-dom";
import ITSLogin from "../../../Assets/Images/ITS/itswhite-logo.png";
import QardanHasanaLogo from "../../../Assets/Images/Logo/qardanhassanalogo.png";

export const LoginWithITS = () => {
  return (
    <section className="bg-primary">
      <div className="flex flex-col lg:flex-row justify-between min-h-screen">
        {/* Left - Scrollable */}
        <div className="lg:w-1/2 px-5 xl:pl-12 pt-10 overflow-y-auto max-h-screen scrollbar-left">
          <div className="min-h-full flex flex-col">
            <Link to='/' className="shrink-0">
              <img src={QardanHasanaLogo} className="w-32" alt="Logo" />
            </Link>
            <div className="max-w-[450px] m-auto w-full py-16 flex-grow">
              <header className="text-center mb-8">
                <h2 className="text-text-dark text-4xl font-semibold font-poppins mb-2">
                  Login Burhani Qardan Hasana Nasik with ITS
                </h2>
              </header>
              <form action="">
                <div className="mb-4">
                  <input
                    type="text"
                    className="text-gray-800 text-base border border-gray-300 h-14 w-full focus:border-green-500 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-gray-500 placeholder:text-base"
                    placeholder="ITS Number"
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
                    <svg
                      width={22}
                      height={20}
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1L20 19"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.58445 8.58704C9.20917 8.96205 8.99823 9.47079 8.99805 10.0013C8.99786 10.5319 9.20844 11.0408 9.58345 11.416C9.95847 11.7913 10.4672 12.0023 10.9977 12.0024C11.5283 12.0026 12.0372 11.7921 12.4125 11.417"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.363 3.36506C9.22042 3.11978 10.1082 2.9969 11 3.00006C15 3.00006 18.333 5.33306 21 10.0001C20.222 11.3611 19.388 12.5241 18.497 13.4881M16.357 15.3491C14.726 16.4491 12.942 17.0001 11 17.0001C7 17.0001 3.667 14.6671 1 10.0001C2.369 7.60506 3.913 5.82506 5.632 4.65906"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                  Sign In
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
  );
};
