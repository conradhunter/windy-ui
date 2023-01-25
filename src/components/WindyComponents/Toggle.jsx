import React, { useState } from 'react';

function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        className='absolute opacity-0 w-0 h-0 cursor-pointer'
        checked={isChecked}
        onChange={handleChange}
      />
      <span className='relative'>
        <span
          className={`block w-14 h-7 rounded-full shadow-inner ${
            isChecked ? 'bg-indigo-500' : 'bg-gray-300'
          }`}
        ></span>
        <span
          className={`absolute top-0 bottom-0 flex items-center justify-center ${
            isChecked ? 'right-0' : 'left-0'
          }`}
        >
          <span className='h-7 w-7 rounded-full bg-white shadow-md'></span>
        </span>
      </span>
    </label>
  );
}

export default Toggle;
