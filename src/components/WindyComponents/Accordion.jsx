import React, { useState } from 'react';

function Accordion() {
  const [isOpen, setIsOpen] = useState(true);

  // Add functionality to

  return (
    <div className='flex flex-col justify-center items-center mx-auto max-w-7xl'>
      <div className='bg-blue-200 py-3 px-6 border-b-2 border-blue-300 w-1/2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='accordion-item' className='font-semibold'>
            Accordion Item 1
          </label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6 rotate-180'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
        <div className={`mt-4 ${!isOpen ? 'hidden' : 'block'}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic
            facere quidem atque ad aliquid officia quasi accusantium illo
            mollitia ipsum, repudiandae magni eaque similique.
          </p>
        </div>
      </div>
      <div className='bg-blue-200 py-3 px-6 border-b-2 border-blue-300 w-1/2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='accordion-item' className='font-semibold'>
            Accordion Item 2
          </label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
        <div className={`mt-4 ${isOpen ? 'hidden' : 'block'}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic
            facere quidem atque ad aliquid officia quasi accusantium illo
            mollitia ipsum, repudiandae magni eaque similique.
          </p>
        </div>
      </div>
      <div className='bg-blue-200 py-3 px-6 border-b-2 border-blue-300 w-1/2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='accordion-item' className='font-semibold'>
            Accordion Item 3
          </label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
        <div className={`mt-4 ${isOpen ? 'hidden' : 'block'}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic
            facere quidem atque ad aliquid officia quasi accusantium illo
            mollitia ipsum, repudiandae magni eaque similique.
          </p>
        </div>
      </div>
      <div className='bg-blue-200 py-3 px-6 border-b-2 border-blue-300 w-1/2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='accordion-item' className='font-semibold'>
            Accordion Item 4
          </label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
        <div className={`mt-4 ${isOpen ? 'hidden' : 'block'}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic
            facere quidem atque ad aliquid officia quasi accusantium illo
            mollitia ipsum, repudiandae magni eaque similique.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
