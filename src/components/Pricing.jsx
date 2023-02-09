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
        <h2 className='mb-24 text-xl md:text-5xl font-bold font-heading text-center leading-tight md:max-w-xl mx-auto'>
          Choose a plan that suits you. Fast and stylish UI components.
        </h2>
        <div className='mb-24 md:max-w-6xl mx-auto flex justify-evenly'>
          <div id='price-card' className='bg-blue-100 w-2/6'>
            Business
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
