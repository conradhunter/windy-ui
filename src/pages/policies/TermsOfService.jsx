import React from 'react';
import { terms } from '../../data/termsOfService';

function TermsOfService() {
  return (
    <div className='py-10'>
      <h1 className='text-4xl mb-10 text-indigo-500 font-bold text-center'>
        Terms of Service for WindiKit
      </h1>
      <div className='w-2/3 mx-auto'>
        <p className='mb-6'>
          Welcome to WindiKit, a Tailwind UI library! These Terms of Service
          (the "Terms") govern your access to and use of WindiKit (the
          "Service"), which is provided to you by [Your Company Name] (the
          "Company"). By accessing or using WindiKit, you agree to be bound by
          these Terms, which constitute a binding legal agreement between you
          and the Company. If you do not agree to these Terms, you may not use
          WindiKit.
        </p>
        <ol className='list-decimal'>
          {terms.map((term) => {
            return (
              <div key={term.id} className='mb-4'>
                <li className='text-sm text-indigo-500'>{term.termPoint}</li>
                <p className='text-sm font-light'>{term.termOutline}</p>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default TermsOfService;
