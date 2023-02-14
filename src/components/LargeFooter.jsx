import { addDoc, collection } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../backend/firebase/FirebaseConfiguration';
import { handleNavigatePricing } from '../exportedFunctions';

function LargeFooter() {
  const mailingListCollection = collection(db, 'mailing-list-users');
  const [email, setEmail] = useState('');
  const mailingListInputRef = useRef(null);

  const handleSubscribe = async () => {
    await addDoc(mailingListCollection, {
      email,
    });
    mailingListInputRef.current.value = '';
  };

  return (
    <footer className='bg-blue-100 flex py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex'>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-lg text-black font-medium'>Links</h4>
            <ul className=''>
              <li className='mb-4'>
                <Link
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/components'
                >
                  Components
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/faq'
                >
                  FAQ
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  onClick={handleNavigatePricing}
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/'
                >
                  Pricing
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-indigo-500 hover:text-indigo-300'
                  to='/change-log'
                >
                  Change Log
                </Link>
              </li>
              <li className='mb-4'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-lg text-black font-medium'>
              Connect With Us
            </h4>
            <ul className=''>
              <li className='mb-4'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  GitHub
                </Link>
              </li>
              <li className='mb-4'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Twitter
                </Link>
              </li>
              <li className='mb-4'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h4 className='mb-4 text-lg text-black font-medium'>Legal</h4>
            <ul className=''>
              <li className='mb-4'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Privacy Policy
                </Link>
              </li>
              <li className='mb-4'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Cookies Policy
                </Link>
              </li>
              <li className='mb-4'>
                <Link className='text-indigo-500 hover:text-indigo-300' to='#'>
                  Terms of Service
                </Link>
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
                onChange={(e) => setEmail(e.target.value)}
                ref={mailingListInputRef}
                placeholder='Enter your email address'
                className='w-full p-2 rounded-lg text-sm outline-none'
              />
              <button
                onClick={handleSubscribe}
                className='w-fit p-2 text-white bg-indigo-600 text-sm rounded-lg hover:bg-indigo-700 transition duration-200'
              >
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
