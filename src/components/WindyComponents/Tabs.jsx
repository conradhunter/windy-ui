import React, { useState } from 'react';

function Tabs() {
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
          className={`py-1 px-2 ${
            activeTab === 'tabOne'
              ? 'bg-slate-800 text-white rounded-t-md'
              : null
          }`}
        >
          <button onClick={toggleTabOne}>Tab One</button>
        </li>
        <li
          className={`py-1 px-2 ${
            activeTab === 'tabTwo'
              ? 'bg-slate-800 text-white rounded-t-md'
              : null
          }`}
        >
          <button onClick={toggleTabTwo}>Tab Two</button>
        </li>
        <li
          className={`py-1 px-2 ${
            activeTab === 'tabThree'
              ? 'bg-slate-800 text-white rounded-t-md'
              : null
          }`}
        >
          <button onClick={toggleTabThree}>Tab Three</button>
        </li>
      </ul>
      <div className='w-7/12 h-96 bg-slate-800 rounded-b-md rounded-tr-md p-6 text-sm flex items-center justify-center'>
        {activeTab === 'tabOne' && (
          <div id='preview-tab' className='mx-auto'>
            <h1 className='text-white text-3xl'>Tab One Content</h1>
          </div>
        )}
        {activeTab === 'tabTwo' && (
          <div id='html-tab'>
            <h1 className='text-white text-3xl'>Tab Two Content</h1>
          </div>
        )}
        {activeTab === 'tabThree' && (
          <div id='jsx-tab'>
            <h1 className='text-white text-3xl'>Tab Three Content</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
