import React from 'react';
import PricingCard from './PricingCard';
import { basic, business, enterprise } from '../data/pricing';

function Pricing() {
  return (
    <section id='pricing' className='py-24 overflow-hidden bg-blue-200'>
      <div className='container px-4 mx-auto'>
        <h2 className='mb-20 text-xl md:text-5xl font-bold text-indigo-600 text-center leading-tight md:max-w-xl mx-auto'>
          Choose a plan that suits you. Fast and stylish UI components.
        </h2>
        <div className='mb-24 mx-auto flex justify-evenly'>
          <PricingCard data={basic} />
          <PricingCard data={business} />
          <PricingCard data={enterprise} />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
