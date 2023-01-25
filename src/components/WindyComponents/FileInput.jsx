import React from 'react';

function FileInput() {
  return (
    <>
      <div className='relative rounded-md cursor-pointer'>
        <label
          htmlFor='file'
          className='relative z-10 cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800'
        >
          <svg
            className='w-5 h-5 -ml-1 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z' />
          </svg>
          Browse
        </label>
        <input id='file' type='file' className='absolute inset-0 opacity-0' />
      </div>

      <div className='relative rounded-md'>
        <label
          htmlFor='file1'
          className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-pink-500 border border-transparent rounded-md hover:bg-pink-600 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-800'
        >
          <svg
            className='w-5 h-5 -ml-1 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M13 16V6H3v10h10zM16 4h1v5h-1v-5zM2 4h1v5H2V4zm19-2H1v14a2 2 0 002 2h14a2 2 0 002-2V2z' />
          </svg>
          Browse
        </label>
        <input
          id='file1'
          type='file'
          className='absolute inset-0 opacity-0 cursor-pointer'
        />
      </div>

      <div className='relative rounded-md'>
        <label
          htmlFor='file2'
          className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-800'
        >
          <svg
            className='w-5 h-5 -ml-1 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm10 10a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6z' />
          </svg>
          Browse
        </label>
        <input
          id='file2'
          type='file'
          className='absolute inset-0 opacity-0 cursor-pointer'
        />
      </div>

      <div className='relative rounded-md'>
        <label
          htmlFor='file3'
          className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-800'
        >
          <svg
            className='w-5 h-5 -ml-1 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M4 8V6a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 10-2 0zM7 6v2h6V6a3 3 0 00-6 0z' />
          </svg>
          Browse
        </label>
        <input
          id='file3'
          type='file'
          className='absolute inset-0 opacity-0 cursor-pointer'
        />
      </div>
    </>
  );
}

export default FileInput;
