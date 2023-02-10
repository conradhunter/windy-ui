import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAuth0 } from '@auth0/auth0-react';
import UserProfilePreview from './UserProfilePreview';

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

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  // TODO create logic to that hamburger modal automatically closes if screen gets larger (past certain screen width, when normal nav nodes become shown)

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
          <a
            className='text-md py-3 px-5 hover:bg-gray-700 rounded duration-200'
            href='/#pricing'
          >
            Pricing
          </a>
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
        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className='block py-3 px-5 text-center leading-6 text-md text-white hover:bg-gray-700 rounded duration-200 mr-2'
          >
            Sign in
          </button>
        ) : (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className='block py-3 px-5 text-center leading-6 text-md text-white hover:bg-gray-700 rounded duration-200 mr-2'
          >
            Log out
          </button>
        )}

        <Link
          className='block py-3 px-5 mr-6 text-center font-medium leading-6 text-md text-white bg-indigo-500 hover:bg-indigo-700 border-3 border-indigo-900 shadow rounded transition duration-200'
          to='/contact'
        >
          Contact Us
        </Link>
        {isAuthenticated ? (
          <Link to='/profile'>
            <UserProfilePreview />
          </Link>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            <UserProfilePreview />
          </button>
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
            <li>
              <Link to='/'>Sign In</Link>
            </li>
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
