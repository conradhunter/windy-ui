import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  // TODO render users information at top of profile page
  const profileImage =
    'https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg';

  const handleThemeChange = () => {
    // TODO change theme to dark or light mode
  };

  return (
    <div className='flex flex-col justify-center items-center my-12 gap-8'>
      <section className='w-2/3 border border-gray-300 rounded-xl p-10'>
        <h1 className='text-center text-2xl text-indigo-500 font-semibold mb-10'>
          Hi Conrad!
        </h1>
        <div className='w-full flex justify-evenly items-center'>
          <img src={profileImage} className='w-16 h-16 rounded-full' alt='' />
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
              Phone Number:
            </label>
            <span>250-863-2504</span>
          </div>
        </div>
      </section>

      <section className='w-2/3 border border-gray-300 rounded-xl p-10'>
        <h1 className='text-center text-2xl text-indigo-500 font-semibold mb-10'>
          Settings
        </h1>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center'>
            <span className='mr-4'>Theme:</span>
            <button className='flex items-center mr-4 hover:bg-indigo-100 duration-200 p-2 rounded-lg gap-3'>
              Light <LightModeOutlined />
            </button>
            <button className='flex items-center hover:bg-indigo-100 duration-200 p-2 rounded-lg gap-3'>
              Dark <DarkModeOutlined />
            </button>
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
            <button className='bg-red-700 opacity-85 text-white p-3 rounded-lg hover:bg-red-500'>
              Delete Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
