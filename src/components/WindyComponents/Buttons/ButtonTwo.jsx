import React from 'react';

function ButtonTwo() {
  return (
    <button
      onClick={() => alert('You clicked me!')}
      className='bg-blue-400 hover:bg-blue-500 px-8 duration-200 uppercase w-56 py-3 inline-block rounded-xl text-white text-lg'
    >
      Click me
    </button>
  );
}

export default ButtonTwo;
