import { Link, useNavigate } from "react-router-dom";
import ITSLogin from "../../../Assets/Images/ITS/itswhite-logo.png";
import QardanHasanaLogo from "../../../Assets/Images/Logo/qardanhassanalogo.png";
import { PageLayout } from "../../../Components/Layout/Page Layout";
import { useForm } from "react-hook-form";
import { Input } from "../../../Components/Shared";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../../auth";

export const Login = () => {
  const { control, handleSubmit, setError } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (data) => {
    console.log("Login With Jamaat Data:", data);
    const loginSuccessful = login(data);

    if (loginSuccessful) {
      navigate("/");
    } else {
      setError("sabil-number", {
        type: "manual",
        message: "Invalid Sabil Number or Password",
      });
    }
  };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Input
                      name="sabilNumber"
                      label="Sabil Number"
                      type="text"
                      dark={true}
                      control={control}
                      required
                      icon={UserCircleIcon}
                      placeholder="Enter your sabil number"
                      autoComplete="sabilnumber"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <Input
                      type="password"
                      name="password"
                      label="Password"
                      control={control}
                      placeholder="Enter your password"
                      required={true}
                      autoComplete="current-password"
                      rules={{
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                          message:
                            "Password must include letters, numbers, and a special character",
                        },
                      }}
                      dark={true}
                    />
                  </div>
                  <div className="flex justify-between mb-7">
                    <div className="flex items-center space-x-3">
                      <Input
                        name="remember"
                        type="checkbox"
                        control={control}
                        label="Remember me"
                        dark={true}
                        className="-text-dark text-base font-semibold"
                      />
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
