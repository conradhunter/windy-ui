import React from 'react'

function Tabs() {
  return (
    <div>
      <ul className='inline-flex'>
        <li className='py-2 px-6 bg-white rounded-t-lg cursor-pointer'>HTML</li>
        <li className='py-2 px-6 bg-white rounded-t-lg opacity-50'>JSX</li>
      </ul>
    </div>
  )
}

export default Tabs