import React, { useState } from 'react';

function MockUpCode() {
  const [activeTab, setActiveTab] = useState('tabOne');

  function toggleTabOne() {
    setActiveTab('tabOne');
  }

  function toggleTabTwo() {
    setActiveTab('tabTwo');
  }

  function toggleTabThree() {
    setActiveTab('tabThree');
  }

  return (
    <div>
      <ul className='flex gap'>
        <li
          className={`py-1 px-3 ${
            activeTab === 'tabOne'
              ? 'bg-slate-800 text-white rounded-t-md'
              : null
          }`}
        >
          <button onClick={toggleTabOne}>Preview</button>
        </li>
        <li
          className={`py-1 px-3 ${
            activeTab === 'tabTwo'
              ? 'bg-slate-800 text-white rounded-t-md'
              : null
          }`}
        >
          <button onClick={toggleTabTwo}>HTML</button>
        </li>
        <li
          className={`py-1 px-3 ${
            activeTab === 'tabThree'
              ? 'bg-slate-800 text-white rounded-t-md'
              : null
          }`}
        >
          <button onClick={toggleTabThree}>JSX</button>
        </li>
      </ul>
      <div className='w-7/12 h-96 bg-slate-800 rounded-b-md rounded-tr-md p-2 text-white text-xs flex items-center overflow-x-scroll'>
        {activeTab === 'tabOne' && (
          <h1 className='text-white text-3xl'>Preview</h1>
        )}
        {activeTab === 'tabTwo' && (
          <h1 className='text-white text-3xl'>HTML</h1>
        )}
        {activeTab === 'tabThree' && (
          <h1 className='text-white text-3xl'>JSX</h1>
        )}
      </div>
    </div>
  );
}

export default MockUpCode;
