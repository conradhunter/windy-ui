import React from "react";
import stripe from "../assets/logos/stripe.svg";
import amex from "../assets/logos/amex.svg";
import mastercard from "../assets/logos/mastercard.svg";
import paypal from "../assets/logos/paypal.svg";
import visa from "../assets/logos/visa.svg";
import applePay from "../assets/logos/apple-pay.svg";
import popular from "../assets/popular.png";
import gradient from '../assets/gradient3.svg';

function Pricing() {
  return (
    <section className="pt-24 pb-28 overflow-hidden bg-blue-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-24 text-2xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-tight md:max-w-xl mx-auto">
          Choose a plan that suits you. Grow business fast.
        </h2>
        <div className="mb-24 md:max-w-6xl mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div
                className="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-3xl"
              >
                <div>
                  <span className="mb-9 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">
                    Basic
                  </span>
                  <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-none">
                    Free
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                    No credit card required
                  </p>
                  <p className="mb-9 text-gray-600 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Egestas lacus, blan dit pellentesque.
                  </p>
                </div>
                <button
                  className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  Get Started Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div
                className="relative flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-3xl shadow-2xl"
              >
                <img
                  className="absolute -top-11 -right-8"
                  src={popular}
                  alt=""
                />
                <img
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  src={gradient}
                  alt=""
                />
                <div className="relative z-10">
                  <span className="mb-9 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">
                    Standard
                  </span>
                  <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-none">
                    $19/mo
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                    Billed Annually
                  </p>
                  <p className="mb-9 text-gray-600 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Egestas lacus, blan dit pellentesque.
                  </p>
                  <button
                    className="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                    type="button"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div
                className="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-3xl"
              >
                <div>
                  <span className="mb-9 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">
                    Pro
                  </span>
                  <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-none">
                    $49/mo
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                    Billed Annually
                  </p>
                  <p className="mb-9 text-gray-600 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Egestas lacus, blan dit pellentesque.
                  </p>
                </div>
                <button
                  className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-4 text-sm text-gray-500 text-center font-medium leading-relaxed">
          Trusted by secure payment service
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-auto">
            <a href="#">
              <img src={stripe} alt="" />
            </a>
          </div>
          <div className="w-auto">
            <a href="#">
              <img src={amex} alt="" />
            </a>
          </div>
          <div className="w-auto">
            <a href="#">
              <img src={mastercard} alt="" />
            </a>
          </div>
          <div className="w-auto">
            <img src={paypal} alt="" />
          </div>
          <div className="w-auto">
            <a href="#">
              <img src={visa} alt="" />
            </a>
          </div>
          <div className="w-auto">
            <a href="#">
              <img src={applePay} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
