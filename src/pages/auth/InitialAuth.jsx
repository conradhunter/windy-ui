import React, { useState } from "react";
import { Link } from "react-router-dom";

function InitialAuth() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreePolicy, setAgreePolicy] = useState("");

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto py-12 px-8 bg-gray-100 rounded-xl text-center shadow-2xl">
          <span className="text-sm text-gray-500 font-semibold uppercase">
            Welcome
          </span>
          <h3 className="mb-8 text-3xl font-bold font-heading">
            Create new account
          </h3>
          <form action="#">
            <div className="flex flex-wrap md:flex-nowrap">
              <input
                className="w-full md:w-1/2 md:mr-2 py-3 pl-3 mb-4 bg-white rounded-lg"
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="w-full md:w-1/2 py-3 pl-3 mb-4 bg-white rounded-lg"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
              type="text"
              placeholder="Username"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
              type="email"
              placeholder="E-mail address"
              autoComplete=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="inline-block mb-4">
              <input
                className="mr-1"
                type="checkbox"
                name="terms"
                onChange={(e) => setAgreePolicy(e.target.checked)}
              />
              <span className="text-sm text-gray-500">
                By signing up, you agree to our{" "}
                <Link className="font-bold hover:underline" to="/terms-of-service">
                  Terms of Service
                </Link>,{" "}<Link className="font-bold hover:underline" to="/privacy-policy">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link className="font-bold hover:underline" to="/cookies-policy">
                  Cookies Policy
                </Link>
                .
              </span>
            </label>
            <button className="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-500">
            <Link className="font-bold hover:underline" to="/sign-in">
            <span>Already have an account?</span> Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default InitialAuth;
