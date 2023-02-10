import React from 'react';
import stripe from '../assets/logos/stripe.svg';
import amex from '../assets/logos/amex.svg';
import mastercard from '../assets/logos/mastercard.svg';
import paypal from '../assets/logos/paypal.svg';
import visa from '../assets/logos/visa.svg';
import applePay from '../assets/logos/apple-pay.svg';
import PricingCard from './PricingCard';
import { basic, business, enterprise } from '../data/pricing';

function Pricing() {
  return (
    <section className='pt-24 pb-28 overflow-hidden bg-blue-200'>
      <div className='container px-4 mx-auto'>
        <h2 className='mb-24 text-xl md:text-5xl font-bold text-indigo-600 text-center leading-tight md:max-w-xl mx-auto'>
          Choose a plan that suits you. Fast and stylish UI components.
        </h2>
        <div className='mb-24 mx-auto flex justify-evenly'>
          <PricingCard data={basic} />
          <PricingCard data={business} />
          <PricingCard data={enterprise} />
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
