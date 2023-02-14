import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function LogOutButton() {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className='block py-3 px-5 text-center leading-6 text-md text-white hover:bg-gray-700 rounded duration-200 mr-2'
    >
      Log out
    </button>
  );
}

export default LogOutButton;
