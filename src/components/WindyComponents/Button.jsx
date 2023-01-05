import React from 'react';

function Button() {
  return (
    <div className='flex flex-col gap-8'>
      <button className='bg-indigo-600 hover:bg-indigo-700 duration-200 px-8 uppercase py-3 inline-block rounded-xl text-white text-lg'>
        Button
      </button>

      <button
        onClick={() => alert('You clicked me!')}
        className='bg-blue-400 hover:bg-blue-500 px-8 duration-200 uppercase py-3 inline-block rounded-xl text-white text-lg'
      >
        Click me
      </button>

      <button className='bg-green-400 hover:scale-110 px-8 duration-200 uppercase py-3 inline-block rounded-xl text-black text-lg'>
        Hover me
      </button>

      <button className='bg-red-500 uppercase px-8 py-3 inline-block rounded-xl text-lg text-white hover:animate-spin'>
        Hover me
      </button>
    </div>
  );
}

export default Button;
