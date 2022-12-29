import React from "react";
import { Link } from "react-router-dom";
import google from "../../assets/logos/google.png";

function SignIn() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto py-12 px-8 bg-gray-100 rounded-xl text-center shadow-2xl">
          <h3 className="mb-8 text-3xl font-bold font-heading">Sign In</h3>
          <form action="#">
            <input
              className="w-full py-3 pl-3 mb-4 bg-white border rounded-lg"
              type="email"
              placeholder="E-mail address"
            />
            <input
              className="w-full py-3 pl-3 mb-4 bg-white border rounded-lg"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200">
              Sign-In
            </button>
            <div className="flex flex-col">
              <a className="text-sm text-gray-500 hover:underline mb-2" href="#">
                Forgot password?
              </a>
              <Link className="text-sm text-gray-500 hover:underline" to="/welcome">
                Dont have an account? Sign up
              </Link>
            </div>
            <a
              className="flex items-center justify-center mt-4 mb-4 py-3 text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg"
              href="#"
            >
              <img className="w-5 h-5 mr-2" src={google} alt="" />
              <span className="text-sm font-bold text-gray-500">
                Sign in with Google
              </span>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
