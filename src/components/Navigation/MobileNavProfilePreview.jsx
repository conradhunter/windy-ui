import React from 'react';
import { Link } from 'react-router-dom';

function MobileNavProfilePreview({ modalOpen, setModalOpen }) {
  const profileImage =
    'https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg';

  return (
    <div className='flex items-center justify-center border-b-2 border-indigo-500 w-full pb-10'>
      <Link to='/profile' onClick={() => setModalOpen(!modalOpen)}>
        <img className='w-16 rounded-full mr-10' src={profileImage} alt='' />
      </Link>
      <div className='flex flex-col'>
        <span className='font-semibold'>Conrad Hunter</span>
        <span className='text-sm'>conrad@conradhunterdev.com</span>
      </div>
    </div>
  );
}

export default MobileNavProfilePreview;
