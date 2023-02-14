import React from 'react';

function Steps() {
  return (
    <div className='flex flex-col'>
      <div className='py-6'>
        <div className='flex items-center relative'>
          <div className='w-12 h-12 bg-indigo-500 text-white text-center rounded-full'>
            1
          </div>
          <div className='pl-4'>
            <div className='font-medium text-indigo-500'>January 1, 2023</div>
            <div className='text-gray-600'>
              This is the first step update with a brief description of what was
              added or improved.
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute left-0 top-6 bottom-6 border-l border-indigo-500'></div>
      </div>
      <div className='py-6'>
        <div className='flex items-center relative'>
          <div className='w-12 h-12 bg-indigo-500 text-white text-center rounded-full'>
            2
          </div>
          <div className='pl-4'>
            <div className='font-medium text-indigo-500'>January 15, 2023</div>
            <div className='text-gray-600'>
              This is the second step update with a brief description of what
              was added or improved.
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute left-0 top-6 bottom-6 border-l border-indigo-500'></div>
      </div>
      <div className='py-6'>
        <div className='flex items-center relative'>
          <div className='w-12 h-12 bg-indigo-500 text-white text-center rounded-full'>
            3
          </div>
          <div className='pl-4'>
            <div className='font-medium text-indigo-500'>February 1, 2023</div>
            <div className='text-gray-600'>
              This is the third step update with a brief description of what was
              added or improved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
