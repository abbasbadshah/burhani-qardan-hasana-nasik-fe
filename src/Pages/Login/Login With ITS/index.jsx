import { Link } from "react-router-dom";
import ITSLogin from "../../../Assets/Images/ITS/itswhite-logo.png";
import QardanHasanaLogo from "../../../Assets/Images/Logo/qardanhassanalogo.png";
import { PageLayout } from "../../../Components/Layout/Page Layout";
import { useForm } from "react-hook-form";
import { Input } from "../../../Components/Shared";
import { UserCircleIcon } from "@heroicons/react/24/outline";
export const LoginWithITS = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <PageLayout pageTitle="Login">
      <section className="bg-primary">
        <div className="flex flex-col lg:flex-row justify-between min-h-screen">
          {/* Left - Scrollable */}
          <div className="lg:w-1/2 px-5 xl:pl-12 pt-10 overflow-y-auto max-h-screen scrollbar-left">
            <div className="min-h-full flex flex-col">
              <div className="flex justify-between items-center">
                <Link className="shrink-0" to="/">
                  <img src={QardanHasanaLogo} className="w-32" alt="Logo" />
                </Link>
                <button className="p-3.5 flex items-center justify-center text-white font-bold bg-[#B88029] hover:bg-amber-700 transition-colors rounded-lg">
                  <Link to='/'>Back to Default Login</Link>
                </button>
              </div>
              <div className="max-w-[450px] m-auto w-full py-16 flex-grow">
                <header className="text-center mb-8">
                  <h2 className="text-text-dark text-4xl font-semibold font-poppins mb-2">
                    Login Burhani Qardan Hasana Nasik with ITS
                  </h2>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Input
                      name="its-number"
                      label="ITS Number"
                      type="text"
                      dark={true}
                      control={control}
                      required
                      icon={UserCircleIcon}
                      placeholder="Enter your ITS Number"
                      autoComplete="itsnumber"
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
