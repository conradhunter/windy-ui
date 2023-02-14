import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { scrollToTopOnMount } from '../exportedFunctions';

function PricingCard({ data }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  function handleChoosePlan() {
    if (isAuthenticated && !data.paymentLink) {
      return (
        <Link onClick={() => scrollToTopOnMount()} to='/components'>
          View Components
        </Link>
      );
    } else if (data.paymentLink) {
      return <a href={data.paymentLink}>Choose Plan</a>;
    } else if (!data.paymentLink) {
      return <Link onClick={() => loginWithRedirect()}>Choose Plan</Link>;
    }
  }

  return (
    <div className='bg-gray-100 p-8 rounded-lg shadow-xl w-80 '>
      <h3 className='text-3xl font-bold text-center text-indigo-600'>
        {data.plan}
      </h3>
      <div className='text-center text-gray-600'>
        <p className='my-4'>{data.for}</p>
      </div>
      <div className='flex items-center justify-center mt-8'>
        {data.price === 'Free' ? (
          <span className='text-3xl font-bold text-indigo-600'>
            {data.price}
          </span>
        ) : (
          <>
            <span className='text-3xl font-bold text-red-500 mr-2'>
              ${data.earlyBirdPrice}
            </span>
            <span className='text-3xl font-bold text-indigo-600 line-through opacity-70'>
              ${data.price}
            </span>
          </>
        )}
      </div>
      <div className='mt-8'>
        <div className='flex flex-col items-center'>
          <div className='w-1/3 border-b border-gray-300 mb-2'></div>
          <span className='text-xs text-gray-600'>FEATURES</span>
          <div className='w-1/3 border-b border-gray-300 mt-2'></div>
        </div>
      </div>
      <ul className='list-disc pl-4 mt-4 text-gray-700'>
        {data.features.map((feature) => (
          <li key={feature} className='py-2 text-sm'>
            {feature}
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-center mt-12'>
        <button
          disabled={!isAuthenticated}
          className={`bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded ${
            !isAuthenticated ? 'cursor-not-allowed' : null
          }`}
        >
          {handleChoosePlan()}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
