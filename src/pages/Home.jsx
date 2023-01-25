import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Pricing from '../components/Pricing';

function Home() {
  return (
    <div id='home-page'>
      <div className='w-full flex items-center justify-center flex-col min-h-[calc(100vh-5rem)]'>
        <h1 className='text-5xl font-bold'>WindiKit</h1>
        <p className='py-6 w-1/3 text-center'>
          A Tailwind UI library with 50+ fully responsive components ready for
          your next project.
        </p>
        <Link to='/components'>
          <button className='w-44 inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200'>
            See Components
          </button>
        </Link>
      </div>
      <div id='pricing' className='h-screen bg-slate-400'>
        {/* Pricing */}
        <Pricing />
        {/* Customer reviews */}
      </div>
    </div>
  );
}

export default Home;
