import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/logos/google.png';
import CloseIcon from '@mui/icons-material/Close';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className='flex items-center justify-center min-h-[calc(100vh-5rem)]'>
      <Link to='/' className='absolute top-8 left-8'>
        <CloseIcon fontSize='large' />
      </Link>
      <div className='container px-4 mx-auto'>
        <div className='max-w-md mx-auto py-12 px-8 bg-gray-100 rounded-xl text-center shadow-2xl'>
          <h3 className='mb-8 text-3xl font-bold font-heading'>Sign In</h3>
          <form action='#'>
            <input
              className='w-full py-3 pl-3 mb-4 bg-white border rounded-lg'
              type='email'
              autoComplete='off'
              placeholder='E-mail address'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='w-full py-3 pl-3 mb-4 bg-white border rounded-lg'
              type='password'
              placeholder='Password'
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200'>
              Sign-In
            </button>
            <div className='flex flex-col'>
              <a
                className='text-sm text-gray-500 hover:underline mb-2'
                href='#'
              >
                Forgot password?
              </a>
              <Link
                className='text-sm text-gray-500 hover:underline'
                to='/welcome'
              >
                Dont have an account? Sign up
              </Link>
            </div>
            <button className='flex items-center justify-center mx-auto w-2/3 mt-4 mb-4 py-3 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-lg'>
              <img className='w-5 h-5 mr-2' src={google} alt='' />
              <span className='text-sm font-bold text-gray-500'>
                Sign in with Google
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
