import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function SignInButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className='block py-3 px-5 text-center leading-6 text-md text-white hover:bg-gray-700 rounded duration-200 mr-2'
    >
      Sign in
    </button>
  );
}

export default SignInButton;
