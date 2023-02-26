import { addDoc, collection } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { db } from '../../backend/firebase/FirebaseConfiguration';

function MailingList() {
  const mailingListCollection = collection(db, 'mailing-list-users');
  const [email, setEmail] = useState('');
  const mailingListInputRef = useRef(null);

  const handleSubscribe = async () => {
    await addDoc(mailingListCollection, {
      email,
    });
    mailingListInputRef.current.value = '';
  };

  return (
    <div className='text-center'>
      <h3 className='text-lg font-bold mb-2'>Subscribe to our newsletter</h3>
      <p className='text-sm mb-4'>
        Get the latest updates and news from WindiKit
      </p>
      <div className='flex items-center bg-white rounded-lg px-2 py-2'>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          ref={mailingListInputRef}
          placeholder='Enter your email address'
          className='w-full p-2 rounded-lg text-sm outline-none'
        />
        <button
          onClick={handleSubscribe}
          className='w-fit p-2 text-white bg-indigo-600 text-sm rounded-lg hover:bg-indigo-700 transition duration-200'
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default MailingList;
