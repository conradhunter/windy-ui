import React from 'react';

function LargeFooter() {
  return (
    <footer className='bg-blue-100 flex py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex'>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-lg text-black font-medium'>Links</h4>
            <ul className=''>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Components
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  FAQ
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Pricing
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Change Log
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-lg text-black font-medium'>
              Connect With Us
            </h4>
            <ul className=''>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  GitHub
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Twitter
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-lg text-black font-medium'>Legal</h4>
            <ul className=''>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Cookies Policy
                </a>
              </li>
              <li className='mb-4'>
                <a className='text-indigo-500 hover:text-indigo-300' href='#'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-bold mb-2'>
              Subscribe to our newsletter
            </h3>
            <p className='text-sm mb-4'>
              Get the latest updates and news from WindiKit
            </p>
            <div className='flex items-center bg-white rounded-lg px-2 py-2'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='w-full p-2 rounded-lg text-sm outline-none'
              />
              <button className='w-fit p-2 text-white bg-indigo-600 text-sm rounded-lg hover:bg-indigo-700 transition duration-200'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LargeFooter;
