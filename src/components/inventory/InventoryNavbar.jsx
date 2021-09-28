import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/navbar.css";
import { useLocation } from "react-router-dom";

const InventoryNavbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:flex justify-center">
        <div className="grid grid-cols-5 md:w-9/12 text-center font-semibold text-sm">
          <div className="p-4">
            <Link
              to="/stock"
              className={`font-bold ${
                location.pathname === "/stock" ? "navlink-hover" : "navlink-no-hover"
              }`}
            >
              STOCKS
            </Link>
          </div>
          <div className="p-4">
            <Link
              to="/stock/addStock"
              className={`font-bold ${
                location.pathname === "/stock/addStock"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              ADD STOCKS
            </Link>
          </div>
          <div className="p-4 hidden sm:block">
            <Link
              to="/stock/reorder"
              className={`font-bold ${
                location.pathname === "/stock/reorder"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              RE-ORDER
            </Link>
          </div>
          <div className="p-4">
            <Link
              to="/stock/stockRequests"
              className={`font-bold ${
                location.pathname === "/stock/stockRequests"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              STOCK REQUESTS
            </Link>
          </div>
          <div className="p-4">
            <Link
              to="/login"
              className={`font-bold ${
                location.pathname === "/logout"
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
            location.pathname === "/" ? "bg-blue-500" : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/stock"
                className={`font-bold ${
                  location.pathname === "/"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
                STOCKS
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            location.pathname === "/addStock"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/addStock"
                className={`font-bold ${
                  location.pathname === "/addStock"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
                ADD STOCKS
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            location.pathname === "/reorder"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/reorder"
                className={`font-bold ${
                  location.pathname === "/reorder"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
                RE-ORDER
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            location.pathname === "/stockRequests"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/stockRequests"
                className={`font-bold ${
                  location.pathname === "/stockRequests"
                    ? "navlink-mobile-hover"
                    : "navlink-no-hover"
                }`}
              >
                STOCK REQUESTS
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            location.pathname === "/logout" ? "bg-blue-500" : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/logout"
                className={`font-bold ${
                  location.pathname === "/logout"
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

export default InventoryNavbar;
