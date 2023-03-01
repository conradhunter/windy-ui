import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfilePreview from '../UserProfilePreview';
import ContactLinkButton from '../Buttons/ContactLinkButton';
import LogOutButton from '../Buttons/LogOutButton';
import SignInButton from '../Buttons/SignInButton';
import { handleNavigatePricing } from '../../exportedFunctions';
import MobileNavMenu from './MobileNavMenu';

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

  function handleDisplayProviderData() {
    if (userIdentities.provider == 'auth0') {
      return;
    } else if (userIdentities.provider == 'google-oauth2') {
      return;
    }
  }

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
      <MobileNavMenu
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleToggleModal={handleToggleModal}
        isAuthenticated={isAuthenticated}
      />
    </nav>
  );
}

export default Nav;
