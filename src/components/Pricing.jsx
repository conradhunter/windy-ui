import React from 'react';
import stripe from '../assets/logos/stripe.svg';
import amex from '../assets/logos/amex.svg';
import mastercard from '../assets/logos/mastercard.svg';
import paypal from '../assets/logos/paypal.svg';
import visa from '../assets/logos/visa.svg';
import applePay from '../assets/logos/apple-pay.svg';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <section className='pt-24 pb-28 overflow-hidden bg-blue-200'>
      <div className='container px-4 mx-auto'>
        <h2 className='mb-24 text-2xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-tight md:max-w-xl mx-auto'>
          Choose a plan that suits you. Fast and stylish UI components.
        </h2>
        <div className='mb-24 md:max-w-6xl mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='w-full md:w-1/3 p-4'>
              <div className='flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-3xl'>
                <div>
                  <span className='mb-5 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug'>
                    Basic
                  </span>
                  <h3 className='mb-1 text-4xl text-gray-900 font-bold leading-none'>
                    Free
                  </h3>
                  <p className='mb-6 text-sm text-gray-600 font-medium leading-relaxed'>
                    No credit card required
                  </p>
                  <p className='mb-9 text-gray-600 font-medium leading-relaxed list-disc'>
                    Free access to a selection of modern, responsive components.
                  </p>
                </div>
                <Link
                  to='/'
                  className='py-4 px-9 text-center w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200'
                  type='button'
                >
                  Get Started Now
                </Link>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4'>
              <div className='relative flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-3xl shadow-2xl'>
                <span className='text-white bg-indigo-600 rounded-full px-3 py-2 w-fit absolute -right-4 -top-5'>
                  Popular
                </span>
                <div className='relative z-10'>
                  <span className='mb-5 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug'>
                    Business
                  </span>
                  <h3 className='mb-1 text-4xl text-gray-900 font-bold leading-none'>
                    $249
                  </h3>
                  <p className='mb-6 text-sm text-gray-600 font-medium leading-relaxed'>
                    One Time Payment
                  </p>
                  <p className='mb-9 text-gray-600 font-medium leading-relaxed list-disc'>
                    Access to all WindyUI components for your business (up to 5
                    people).
                  </p>
                  <a
                    href='https://buy.stripe.com/aEU02R0Uu6RP3XqaEE'
                    target='_blank'
                    className='py-4 px-10 text-center w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                    type='button'
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4'>
              <div className='flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-3xl'>
                <div>
                  <span className='mb-5 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug'>
                    Enterprise
                  </span>
                  <h3 className='mb-1 text-4xl text-gray-900 font-bold leading-none'>
                    $649
                  </h3>
                  <p className='mb-6 text-sm text-gray-600 font-medium leading-relaxed'>
                    One Time Payment
                  </p>
                  <p className='mb-9 text-gray-600 font-medium leading-relaxed list-disc'>
                    Access to all WindyUI components for your team (up to 20
                    people).
                  </p>
                </div>
                <Link
                  to='/'
                  className='py-4 px-9 text-center w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200'
                  type='button'
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className='mb-4 text-sm text-gray-500 text-center font-medium leading-relaxed'>
          Trusted by secure payment service
        </p>
        <div className='flex flex-wrap justify-center'>
          <div className='w-auto'>
            <a href='#'>
              <img src={stripe} alt='' />
            </a>
          </div>
          <div className='w-auto'>
            <a href='#'>
              <img src={amex} alt='' />
            </a>
          </div>
          <div className='w-auto'>
            <a href='#'>
              <img src={mastercard} alt='' />
            </a>
          </div>
          <div className='w-auto'>
            <a href='#'>
              <img src={paypal} alt='' />
            </a>
          </div>
          <div className='w-auto'>
            <a href='#'>
              <img src={visa} alt='' />
            </a>
          </div>
          <div className='w-auto'>
            <a href='#'>
              <img src={applePay} alt='' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
