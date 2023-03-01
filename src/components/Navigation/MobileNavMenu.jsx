import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MobileNavProfilePreview from './MobileNavProfilePreview';
import {
  ChangeCircleOutlined,
  ContactPageOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  QuestionAnswerOutlined,
  ToggleOnOutlined,
} from '@mui/icons-material';
import { useAuth0 } from '@auth0/auth0-react';

function MobileNavMenu({
  modalOpen,
  handleToggleModal,
  isAuthenticated,
  setModalOpen,
  dynamicUserData,
}) {
  // TODO: disable scroll on app if modal is open

  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div
      id='mobileNav'
      className={`w-2/3 h-screen bg-blue-100 absolute right-0 top-0 flex flex-col items-center rounded-l-lg pt-32 ${
        modalOpen ? 'animate-open block' : 'hidden'
      }`}
    >
      <MobileNavProfilePreview
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        dynamicUserData={dynamicUserData}
      />
      <button
        className='absolute left-8 top-8 p-2 rounded-full text-white bg-indigo-500'
        onClick={handleToggleModal}
      >
        <ArrowForwardIcon fontSize='large' />
      </button>
      <div className='w-full flex items-center justify-center pt-10'>
        <ul className=' text-md leading-loose w-1/2'>
          <li className='bg-blue-100 flex items-center mb-4 py-1 px-2 hover:bg-blue-200 duration-200 rounded-md'>
            <Link to='/'>
              <HomeOutlined className='mr-3' /> Home
            </Link>
          </li>
          <li className='bg-blue-100 flex items-center mb-4 py-1 px-2 hover:bg-blue-200 duration-200 rounded-md'>
            <Link to='/'>
              <ToggleOnOutlined className='mr-3' /> Components
            </Link>
          </li>
          <li className='bg-blue-100 flex items-center mb-4 py-1 px-2 hover:bg-blue-200 duration-200 rounded-md'>
            <Link to='/'>
              <QuestionAnswerOutlined className='mr-3' /> FAQ
            </Link>
          </li>
          <li className='bg-blue-100 flex items-center mb-4 py-1 px-2 hover:bg-blue-200 duration-200 rounded-md'>
            <Link to='/'>
              <ChangeCircleOutlined className='mr-3' /> Change Log
            </Link>
          </li>
          <li className='bg-blue-100 flex items-center mb-12 py-1 px-2 hover:bg-blue-200 duration-200 rounded-md'>
            <Link to='/'>
              <ContactPageOutlined className='mr-3' /> Contact
            </Link>
          </li>
          {isAuthenticated ? (
            <li className='bg-blue-100 flex items-center mb-4 py-1 px-2 hover:bg-blue-200 duration-200 rounded-md'>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <LogoutOutlined className='mr-3' /> Sign Out
              </button>
            </li>
          ) : (
            <li className='bg-blue-100 flex items-center mb-4 py-1 px-2 hover:bg-blue-200 duration-200 rounded-md'>
              <button onClick={() => loginWithRedirect()}>
                <LoginOutlined className='mr-3' /> Sign In
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MobileNavMenu;
