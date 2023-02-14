import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Error() {
  const errorCode = 404;

  return (
    <section className="flex items-center justify-center h-[calc(100vh-5rem)]">
      <div id="errorCard" className="h-2/3 w-1/4 rounded-3xl shadow-2xl p-10">
        <h1 className="text-7xl text-center text-indigo-600 mb-9">{errorCode}</h1>
        <p className='text-center mb-8'>The page you are looking for cannot be found</p>
        <p className='mb-16 text-xs text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
          praesentium tenetur. Minus harum ex iusto!
        </p>
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-700 flex items-center w-full justify-center"
        >
          <ArrowBackIcon />
          <p className="">Go back to the homepage</p>
        </Link>
      </div>
    </section>
  );
}

export default Error;
