import React, { useState } from 'react';
import AccordionItem from '../components/AccordionItem';
import { faqs } from '../data/faqs';

function FAQ() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleOpenAccordion = (id) => {
    setOpenAccordionId(id === openAccordionId ? null : id);
  };

  return (
    <div className='flex flex-col items-center mx-auto min-h-[calc(100vh-5rem)] py-10 gap-4'>
      <h1 className='text-4xl mb-10 text-indigo-600 font-bold'>
        Frequently Asked Questions
      </h1>
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={faq.id === openAccordionId}
          handleOpenAccordion={() => handleOpenAccordion(faq.id)}
        />
      ))}
    </div>
  );
}

export default FAQ;
