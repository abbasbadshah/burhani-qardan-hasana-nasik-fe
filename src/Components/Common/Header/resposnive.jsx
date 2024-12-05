import { Bars3Icon } from "@heroicons/react/24/outline";
import Qardanhasanalogo from "../../../Assets/Images/Logo/qardanhassanalogo.png";

export const ResponsiveHeader = ({ onSidebarToggle }) => {
    return (
      <header className="p-5 bg-primary block lg:hidden">
        <div className="flex justify-between items-center w-full">
          <div onClick={onSidebarToggle} className="cursor-pointer">
            <Bars3Icon className="text-white w-10" />
          </div>
          <div>
            <img
              src={Qardanhasanalogo}
              width="100%"
              height="100%"
              className="w-20"
              alt="Qardan Hasana Logo"
            />
          </div>
        </div>
      </header>
    );
  };
