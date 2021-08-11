import React from "react";
import { Link } from "react-router-dom";
import ".././styles/navbar.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log(location.pathname);
  });

  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:flex justify-center">
        <div className="grid grid-cols-5 md:w-9/12 text-center font-semibold text-sm">
          <div className="p-4">
            <Link
              to="/"
              className={`font-bold ${
                window.location.pathname === "/"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              STOCKS
            </Link>
          </div>
          <div className="p-4">
            <Link
              to="/addStock"
              className={`font-bold ${
                window.location.pathname === "/addStock"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              ADD STOCKS
            </Link>
          </div>
          <div className="p-4 hidden sm:block">
            <Link
              to="/reorder"
              className={`font-bold ${
                window.location.pathname === "/reorder"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              RE-ORDER
            </Link>
          </div>
          <div className="p-4">
            <Link
              to="/stockRequests"
              className={`font-bold ${
                window.location.pathname === "/stockRequests"
                  ? "navlink-hover"
                  : "navlink-no-hover"
              }`}
            >
              STOCK REQUESTS
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
                STOCKS
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            window.location.pathname === "/addStock"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/addStock"
                className={`font-bold ${
                  window.location.pathname === "/addStock"
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
            window.location.pathname === "/reorder"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/reorder"
                className={`font-bold ${
                  window.location.pathname === "/reorder"
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
            window.location.pathname === "/stockRequests"
              ? "bg-blue-500"
              : "navlink-no-hover"
          }`}
        >
          <div className="flex justify-center w-11/12 ">
            <div className="pt-3 pb-3 pl-2 text-sm text-white">
              <Link
                to="/stockRequests"
                className={`font-bold ${
                  window.location.pathname === "/stockRequests"
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

export default Navbar;
