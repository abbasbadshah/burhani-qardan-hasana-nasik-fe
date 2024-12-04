import QardabHasanaLogo from "../../../Assets/Images/Logo/qardanhassanalogo.png";
import * as HeroIcons from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import menu from "./menu.json";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="flex flex-col w-fit h-screen px-4 py-8 overflow-y-auto bg-primary border-r border-gray-700">
      <Link to="/">
        <img className="w-32" src={QardabHasanaLogo} alt="Qardan Hasana Logo" />
      </Link>
      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <HeroIcons.MagnifyingGlassIcon className="w-5 text-white" />
        </span>
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-300 bg-gray-900 border rounded-md border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <div>
          <nav>
            {menu.map((item, index) => {
              // Dynamically get the icon component from HeroIcons
              const Icon = HeroIcons[item.icon];
              
              // Check if the current path matches the menu item path
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md ${
                    isActive 
                      ? "bg-white text-primary" 
                      : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  }`}
                >
                  <Icon className={`w-5 ${isActive ? "text-primary" : "text-white"}`} />
                  <span className="mx-4 font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <hr className="my-6 border-gray-600" />
        </div>
        <Link to="#" className="flex items-center px-4 -mx-2">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <span className="mx-2 font-medium text-gray-200">John Doe</span>
        </Link>
      </div>
    </aside>
  );
};