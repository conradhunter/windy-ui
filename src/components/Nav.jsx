import React from "react";
import { Link, useLocation } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { auth } from "../backend/FirebaseConfig";
import { signOut } from "firebase/auth";

function Nav({ isAuth, setIsAuth }) {
  const location = useLocation();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signUserOut(auth);
    setIsAuth(false);
    navigate("/");
  }

  function signUserOut() {
    return signOut(auth);
  }

  return (
    <>
      {location.pathname !== "/sign-in" && location.pathname !== "/welcome" && (
        <nav className="flex items-center justify-evenly w-full bg-gray-800 h-20 navbar sm:justify-between px-10">
          <Link to="/" className="py-6 px-6">
            <h2 className="text-white text-lg">WindyUI</h2>
          </Link>
          <ul className="lg:flex mr-12 text-white sm:hidden md:hidden">
            <li>
              <Link
                className="text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/components"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                className="text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/playground"
              >
                Playground
              </Link>
            </li>
            <li>
              <Link
                className="text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                className="text-md py-3 px-5 hover:bg-gray-700 rounded duration-200"
                to="/"
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="lg:flex items-center md:hidden sm:hidden">
            <Link
              className="block py-3 px-5 text-center leading-6 text-md text-white hover:bg-gray-700 rounded duration-200 mr-2"
              to="/sign-in"
            >
              {!isAuth ? (
                <span>Sign in</span>
              ) : (
                <span onClick={handleSignOut}>Log out</span>
              )}
            </Link>
            <Link
              className="block py-3 px-5 mr-6 text-center font-medium leading-6 text-md text-white bg-indigo-500 hover:bg-indigo-700 border-3 border-indigo-900 shadow rounded transition duration-200"
              to="/contact"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="h-7 w-7 mr-2 text-white hover:bg-gray-700 rounded duration-200 flex items-center justify-center py-5 px-5"
            >
              <GitHubIcon />
            </Link>
            <Link
              to="/"
              className="h-7 w-7 text-white hover:bg-gray-700 rounded duration-200 flex items-center justify-center py-5 px-5"
            >
              <TwitterIcon />
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
