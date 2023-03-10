import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/avatar.svg';

function MobileNavProfilePreview({ modalOpen, setModalOpen }) {
  const { user } = useAuth0();

  return (
    <div className='flex items-center justify-evenly border-b-2 border-indigo-500 w-full pb-10'>
      <Link to='/profile' onClick={() => setModalOpen(!modalOpen)}>
        <img className='rounded-full w-14' src={img} alt='' />
      </Link>
      <div className='flex flex-col'>
        <span className='font-semibold text-sm'>Conrad</span>
        <span className='text-xs'>conrad@conradhunterdev.com</span>
      </div>
    </div>
  );
}

export default MobileNavProfilePreview;
