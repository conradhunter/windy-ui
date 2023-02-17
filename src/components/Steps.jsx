import React from 'react';
import { steps } from '../data/changeLogSteps';

function Steps() {
  return (
    <div className='flex flex-col mx-40 my-20'>
      <h1 className='text-4xl mb-10 text-indigo-600 font-bold text-center'>
        View our update and change log history
      </h1>
      <div className='py-6'>
        <div className='flex relative flex-col gap-8'>
          {steps.map((step, index) => {
            return (
              <div key={step.id} className='flex gap-8 mb-8'>
                <div
                  key={index}
                  className='w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full'
                >
                  {step.id}
                </div>
                <div className='pl-4'>
                  <div className='font-medium text-indigo-500'>{step.date}</div>
                  <div className='text-gray-600'>{step.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Steps;
