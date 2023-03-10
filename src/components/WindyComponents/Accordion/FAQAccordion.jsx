import React, { useState } from 'react';

function FAQAccordion() {
  const faqs = [
    {
      id: 1,
      question: 'This is question 1',
      answer: 'This is an answer',
    },
    {
      id: 2,
      question: 'This is question 2',
      answer: 'This is an answer',
    },
    {
      id: 3,
      question: 'This is question 3',
      answer: 'This is an answer',
    },
    {
      id: 4,
      question: 'This is question 4',
      answer: 'This is an answer',
    },
  ];

  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleOpenAccordion = (id) => {
    setOpenAccordionId(id === openAccordionId ? null : id);
  };

  let isOpen;

  function checkIsOpen(id) {
    isOpen = id === openAccordionId;
  }

  return (
    <div>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className='bg-blue-100 py-5 px-8 border-b-2 border-blue-300 max-w-[60%] w-full'
        >
          <div
            className='flex items-center justify-between'
            onClick={handleOpenAccordion}
          >
            <label htmlFor='accordion-item' className='font-medium text-sm'>
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
          {checkIsOpen(faq.id)}
          <div className={`mt-4 ${!isOpen ? 'hidden' : 'block'}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;
