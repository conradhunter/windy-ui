import React, { useState } from 'react';

function MockUpCode({ preview, jsx, html }) {
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
    <div className='w-2/3'>
      <ul className='flex gap-1'>
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
        {activeTab === 'tabOne' && preview}
        {activeTab === 'tabTwo' && (
          <p className='text-white text-base'>{html}</p>
        )}
        {activeTab === 'tabThree' && (
          <p className='text-white text-base'>{jsx}</p>
        )}
      </div>
    </div>
  );
}

export default MockUpCode;
