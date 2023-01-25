import React from 'react';

function MockUp() {
  return (
    <>
      <div class='relative rounded-md shadow-md'>
        <div class='bg-gray-800 p-4 rounded-t-md'>
          <div class='flex items-center'>
            <div class='text-white font-medium'>Code Window</div>
            <div class='ml-auto'>
              <button class='text-gray-500 hover:text-white'>
                <svg
                  class='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class='bg-gray-900 p-4 rounded-b-md'>
          <pre class='text-gray-100 font-mono'>
            <code>
              npm i react-router-dom
              <br />
              npm i react-icons
              <br />
              npm i react-hook-form
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default MockUp;
