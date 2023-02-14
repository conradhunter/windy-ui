import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');

  return (
    <div className='container px-4 mx-auto min-h-[calc(100vh-5rem)] flex items-center justify-center'>
      <div className='max-w-lg mx-auto py-12 px-8 bg-gray-100 rounded-xl text-center shadow-2xl m-10'>
        <h3 className='mb-8 text-3xl font-bold text-indigo-500'>Contact Us</h3>
        <form>
          <input
            className='w-full outline-none py-3 pl-3 mb-4 bg-white border border-gray-400 rounded-lg'
            type='text'
            autoComplete=''
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='w-full outline-none py-3 pl-3 mb-4 bg-white border border-gray-400 rounded-lg'
            type='email'
            autoComplete='email'
            placeholder='E-mail address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='w-full outline-none py-3 pl-3 mb-4 bg-white border border-gray-400 rounded-lg'
            type='text'
            autoComplete=''
            placeholder='Company Name'
            onChange={(e) => setCompany(e.target.value)}
          />
          <textarea
            name='contact_message'
            cols='30'
            rows='5'
            placeholder='Your message...'
            className='w-full outline-none py-3 pl-3 mb-4 bg-white border border-gray-400 rounded-lg min-h-[10rem]'
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type='submit'
            className='w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200'
          >
            Send it our way
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
