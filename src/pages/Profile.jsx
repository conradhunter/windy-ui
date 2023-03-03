import { withAuthenticationRequired } from '@auth0/auth0-react';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteAccountButton from '../components/Buttons/DeleteAccountButton';

function Profile({ setTheme }) {
  // TODO render users information at top of profile page

  const profileImage =
    'https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg';

  return (
    <div className='flex flex-col justify-center items-center my-12 gap-8'>
      <section className='w-7/12 border border-gray-300 rounded-xl p-10'>
        <h1 className='text-center text-2xl text-indigo-500 font-semibold mb-10'>
          Hi Conrad!
        </h1>
        <div className='w-full flex justify-center items-center'>
          <div className='mr-16'>
            <img src={profileImage} className='w-16 h-16 rounded-full' alt='' />
          </div>
          <div className='flex items-center gap-12'>
            <div className='flex flex-col'>
              <label className='text-gray-500' htmlFor=''>
                Name:
              </label>
              <span>Conrad Hunter</span>
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500' htmlFor=''>
                Email:
              </label>
              <span>conrad@conradhunterdev.com</span>
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500' htmlFor=''>
                Company:
              </label>
              <span>WindiKit</span>
            </div>
          </div>
        </div>
      </section>

      <section className='w-7/12 border border-gray-300 rounded-xl p-10'>
        <h1 className='text-center text-2xl text-indigo-500 font-semibold mb-10'>
          Settings
        </h1>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center'>
            <span className='mr-4'>Theme:</span>
            <button
              onClick={() => setTheme('light')}
              className='flex items-center mr-4 hover:bg-indigo-100 duration-200 p-2 rounded-lg gap-3'
            >
              Light <LightModeOutlined />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className='flex items-center hover:bg-indigo-100 duration-200 p-2 rounded-lg gap-3'
            >
              Dark <DarkModeOutlined />
            </button>
          </div>
          <div className='flex items-center py-2'>
            <span className='mr-4'>Plan Type:</span>
            <span className='text-indigo-500'>Business Plan</span>
          </div>
          <div className='flex items-center py-2'>
            <span className='mr-4'>Forgot/Change Password:</span>
            <Link className='text-indigo-500 hover:text-indigo-300' to='/'>
              Update your password
            </Link>
          </div>
          <div className='flex items-center py-2'>
            <span className='mr-4'>Update Details:</span>
            <Link className='text-indigo-500 hover:text-indigo-300' to='/'>
              Update your details
            </Link>
          </div>
          <div className='flex items-center py-2'>
            <span className='mr-4'>Billing information:</span>
            <Link className='text-indigo-500 hover:text-indigo-300' to='/'>
              Update your billing information here.
            </Link>
          </div>
          <div className='flex items-center py-2'>
            <DeleteAccountButton />
          </div>
        </div>
      </section>
    </div>
  );
}

export default withAuthenticationRequired(Profile);
