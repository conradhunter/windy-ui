import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function LandingSection() {
  return (
    <div className='w-full flex items-center justify-center flex-col min-h-[calc(100vh-5rem)]'>
      <TypeAnimation
        sequence={['WindiKit', 2000]}
        cursor={true}
        repeat={Infinity}
        speed={15}
        wrapper={'h2'}
        style={{
          fontSize: '4rem',
          // TODO: create conditional statement for fontsize of typeanimation depending on screen size
          color: '#4F46E5',
          fontFamily: 'inherit',
          fontWeight: 'bold',
        }}
      />
      <p className='py-6 w-1/3 text-center font-medium'>
        A Tailwind UI library with 100+ fully responsive components ready for
        your next project.
      </p>
      <Link to='/components'>
        <button className='w-44 inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200'>
          See Components
        </button>
      </Link>
    </div>
  );
}

export default LandingSection;
