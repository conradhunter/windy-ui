import React from 'react';
import { Link } from 'react-router-dom';

function ContactLinkButton() {
  return (
    <Link
      className='block py-3 px-5 mr-6 text-center font-medium leading-6 text-md text-white bg-indigo-500 hover:bg-indigo-700 border-3 border-indigo-900 shadow rounded transition duration-200'
      to='/contact'
    >
      Contact Us
    </Link>
  );
}

export default ContactLinkButton;
