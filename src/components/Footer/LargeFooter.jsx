import React from 'react';
import { Link } from 'react-router-dom';
import { handleNavigatePricing } from '../../exportedFunctions';
import MailingList from './MailingList';

function LargeFooter() {
  return (
    <footer className='bg-blue-100 flex py-12'>
      <div className='mx-auto max-w-[80%] w-full'>
        <div className='flex max-[850px]:flex-wrap'>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-md text-black font-medium'>Navigation</h4>
            <ul className=''>
              <li className='mb-4 text-sm md:text-base'>
                <Link
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/components'
                >
                  Components
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/faq'
                >
                  FAQ
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link
                  onClick={handleNavigatePricing}
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/'
                >
                  Pricing
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/change-log'
                >
                  Change Log
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-md text-black font-medium'>
              Connect With Us
            </h4>
            <ul className=''>
              <li className='mb-4 text-sm md:text-base'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  GitHub
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Twitter
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-md text-black font-medium'>Legal</h4>
            <ul className=''>
              <li className='mb-4 text-sm md:text-base'>
                <Link
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/terms-of-service'
                >
                  Terms of Service
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Privacy Policy
                </Link>
              </li>
              <li className='mb-4 text-sm md:text-base'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
          <MailingList />
        </div>
      </div>
    </footer>
  );
}

export default LargeFooter;
