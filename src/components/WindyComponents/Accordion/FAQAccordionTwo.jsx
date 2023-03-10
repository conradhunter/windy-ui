import React, { useState } from 'react';
import AccordionItem from '../../AccordionItem';

function FAQAccordionTwo() {
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

  return (
    <div>
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

export default FAQAccordionTwo;
