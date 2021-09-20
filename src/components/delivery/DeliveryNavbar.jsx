import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const DNavbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:flex justify-center">
        <div className="grid grid-cols-4 md:w-9/12 text-center font-semibold text-sm">
          <div className="p-4">
            <Link
              to="/"
              className={`font-bold ${
                window.location.pathname === "/"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              VEHICLES
            </Link>
          </div>
          <div className="p-4">
            <Link
              to="/orderList"
              className={`font-bold ${
                window.location.pathname === "/orderList"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
             ORDER LIST
            </Link>
          </div>
          <div className="p-4 hidden sm:block">
            <Link
              to="/deliveryList"
              className={`font-bold ${
                window.location.pathname === "/deliveryList"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              DELIVERY LIST
            </Link>
          </div>
          
          <div className="p-4">
            <Link
              to="/logout"
              className={`font-bold ${
                window.location.pathname === "/logout"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              LOG OUT
            </Link>
          </div>
        </div>
      </div>

      {/* small screens */}
      <div className="block sm:hidden bg-blue-700">
        <div className="flex justify-center ">
          <div className="flex justify-start w-11/12">
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className={`${
                openMenu ? "fa fa-times" : "fa fa-bars"
              } pt-3 pb-3 pl-2 text-2xl text-white`}
            ></i>{" "}
          </div>
        </div>
      </div>
      {/* Open menu */}
      <div className={`bg-blue-700 ${openMenu ? "" : "hidden"}`}>
        <div
          className={`flex justify-center ${
            window.location.pathname === "/"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/"
                className={`font-bold ${
                  window.location.pathname === "/"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
                VEHICLES
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            window.location.pathname === "/orderList"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/orderList"
                className={`font-bold ${
                  window.location.pathname === "/orderList"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
               ORDER LIST
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            window.location.pathname === "/deliveryList"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/deliveryList"
                className={`font-bold ${
                  window.location.pathname === "/deliveryList"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
               DELIVERY LIST
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            window.location.pathname === "/logout"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/logout"
                className={`font-bold ${
                  window.location.pathname === "/logout"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
                LOG OUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  DNavbar;