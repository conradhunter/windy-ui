import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import UserProfilePreview from './UserProfilePreview';
import ContactLinkButton from './Buttons/ContactLinkButton';
import LogOutButton from './Buttons/LogOutButton';
import SignInButton from './Buttons/SignInButton';
import { handleNavigatePricing } from '../exportedFunctions';

function Nav({ isAuthenticated }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && modalOpen) {
        setModalOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [modalOpen]);

  return (
    <nav className='flex items-center justify-evenly w-full bg-gray-800 h-20 navbar sm:justify-between min-[100px]:justify-between px-10'>
      <Link to='/' className='py-6 px-6'>
        <h2 className='text-white text-lg'>WindiKit</h2>
      </Link>
      <ul className='lg:flex xl:flex mr-12 text-white sm:hidden md:hidden min-[100px]:hidden'>
        <li>
          <Link
            className='text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200'
            to='/components'
          >
            Components
          </Link>
        </li>
        <li>
          <Link
            className='text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200'
            to='/playground'
          >
            Playground
          </Link>
        </li>
        <li>
          <Link
            className='text-md mr-2 2xl:mr-16 py-3 px-5 hover:bg-gray-700 rounded duration-200'
            to='/faq'
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            onClick={handleNavigatePricing}
            className='text-md py-3 px-5 hover:bg-gray-700 rounded duration-200'
            to='/'
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className='text-md py-3 px-5 hover:bg-gray-700 rounded duration-200'
            to='/change-log'
          >
            Change Log
          </Link>
        </li>
      </ul>
      <div className='lg:hidden xl:flex items-center md:hidden sm:hidden min-[100px]:hidden'>
        {!isAuthenticated ? <SignInButton /> : <LogOutButton />}

        <ContactLinkButton />
        {isAuthenticated ? (
          <Link to='/profile'>
            <UserProfilePreview />
          </Link>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            <UserProfilePreview />
          </button>
          // <Link to='/profile'> after the sign in method is complete
          // after initial click of UserProfilePreview, show modal asking user if they want to sign in
        )}
      </div>
      <div className='lg:hidden xl:hidden py-6 px-6 bg-gray-800'>
        <div className='flex items-center justify-between'>
          <button
            className='navbar-burger flex items-center rounded focus:outline-none'
            onClick={handleToggleModal}
          >
            <svg
              className='text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id='mobileNav'
        className={`w-2/3 h-screen bg-blue-200 absolute right-0 top-0 flex items-center justify-center ${
          modalOpen ? 'animate-open block' : 'hidden'
        }`}
      >
        <button className='absolute left-8 top-8' onClick={handleToggleModal}>
          <ArrowForwardIcon fontSize='large' />
        </button>
        <div>
          <ul className='text-center text-xl leading-loose'>
            <li>
              <Link to='/'>Components</Link>
            </li>
            <li>
              <Link to='/'>FAQ</Link>
            </li>
            <li>
              <Link to='/'>Blog</Link>
            </li>
            <li>
              <Link to='/'>Change Log</Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to='/'>Sign Out</Link>
              </li>
            ) : (
              <li>
                <Link to='/'>Sign In</Link>
              </li>
            )}
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
