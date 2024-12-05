import React, {useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import * as HeroIcons from "@heroicons/react/24/outline";
import QardabHasanaLogo from "../../../Assets/Images/Logo/qardanhassanalogo.png";
import menu from "./menu.json";

export const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    // Add click event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <aside 
      ref={sidebarRef}
      className={`fixed lg:static z-50 top-0 left-0 w-fit h-screen bg-primary border-r border-gray-700 transform transition-transform duration-300 ease-in-out 
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <img
            className="w-32"
            src={QardabHasanaLogo}
            alt="Qardan Hasana Logo"
          />
        </Link>
        <HeroIcons.XMarkIcon
          className="w-6 text-white block lg:hidden cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="relative mt-6 px-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <HeroIcons.MagnifyingGlassIcon className="w-5 text-white" />
        </span>
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-300 bg-gray-900 border rounded-md border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6 px-4">
        <div>
          <nav>
            {menu.map((item, index) => {
              const Icon = HeroIcons[item.icon];
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
                  <Icon
                    className={`w-5 ${
                      isActive ? "text-primary" : "text-white"
                    }`}
                  />
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