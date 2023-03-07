import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import avatar from '../assets/avatar.svg';

function UserProfilePreview({}) {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className='rounded-full bg-gray-300 w-9 h-9 overflow-hidden flex items-center justify-center'>
      {!isAuthenticated ? (
        <img className='mt-3' src={avatar} alt='' />
      ) : (
        <span className='text-2xl text-white mb-1'>
          {user.email.slice(0, 1)}
        </span>
      )}
    </div>
  );
}

export default UserProfilePreview;
