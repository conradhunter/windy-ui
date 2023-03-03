import React from 'react';
import { Link } from 'react-router-dom';

function MobileNavProfilePreview({ modalOpen, setModalOpen }) {
  const profileImage =
    'https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg';

  const dynamicUserData = localStorage.getItem('userData');

  return (
    <div className='flex items-center justify-evenly border-b-2 border-indigo-500 w-full pb-10'>
      <Link to='/profile' onClick={() => setModalOpen(!modalOpen)}>
        <img className='rounded-full w-14' src={profileImage} alt='' />
      </Link>
      <div className='flex flex-col'>
        <span className='font-semibold text-sm'>Conrad Hunter</span>
        <span className='text-xs'>conrad@conradhunterdev.com</span>
      </div>
    </div>
  );
}

export default MobileNavProfilePreview;
