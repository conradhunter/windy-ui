import React from 'react';

function AccordionItem({ isOpen, handleOpenAccordion, faq }) {
  function doesHaveLink() {
    if (faq.hasLink) {
      return (
        <p className='text-sm'>
          {faq.answer}{' '}
          <a
            href={faq.externalLink}
            target={'_blank'}
            className='underline text-indigo-500'
          >
            Learn More
          </a>
        </p>
      );
    } else {
      return <p className='text-sm'>{faq.answer}</p>;
    }
  }

  return (
    <div className='bg-blue-100 py-5 px-8 border-b-2 border-blue-300 w-6/12'>
      <div
        className='flex items-center justify-between'
        onClick={handleOpenAccordion}
      >
        <label htmlFor='accordion-item' className='font-medium'>
          {faq.question}
        </label>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className={`w-6 h-6 ${
            isOpen ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
          }`}
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
        {doesHaveLink()}
      </div>
    </div>
  );
}

export default AccordionItem;
