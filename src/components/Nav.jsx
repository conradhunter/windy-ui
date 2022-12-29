import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Task.png";

function Nav({ isAuth }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/sign-in" && location.pathname !== "/welcome" && (
        <nav className="flex items-center justify-evenly w-full bg-gray-800 h-20">
          <Link to="/">
            <img src={logo} alt="" className="h-10" />
          </Link>
          <ul className="flex mr-12 text-white">
            <li>
              <Link
                className="text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="text-md py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/"
              >
                Docs
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Link
              className="block py-3 px-5 text-center leading-6 text-md text-white hover:bg-gray-700 rounded duration-200 mr-2"
              to="/sign-in"
            >
              {!isAuth ? <span>Sign in</span> : <span>Log out</span>}
            </Link>
            <Link
              className="block py-3 px-5 text-center font-medium leading-6 text-md text-white bg-indigo-500 hover:bg-indigo-700 border-3 border-indigo-900 shadow rounded transition duration-200"
              to="/"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden py-6 px-6 bg-gray-800">
            <div className="flex items-center justify-between">
              <button className="navbar-burger flex items-center rounded focus:outline-none">
                <svg
                  className="text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
