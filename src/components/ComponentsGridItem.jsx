import React from 'react';
import { Link } from 'react-router-dom';

function ComponentsGridItem({ component }) {
  return (
    <Link to={`/components/${component}`}>
      <div className='w-72 h-44 bg-white rounded-xl border-2 border-black flex flex-col items-start justify-center px-6 py-4 m-auto'>
        <h3 className='mb-4 text-indigo-600 font-medium'>{component}</h3>
        <p className='text-xs'>13 components</p>
        {/* // TODO: render a version of the component or preview img or emoji */}
        {/* // TODO: on hover: scale the component */}
      </div>
    </Link>
  );
}

export default ComponentsGridItem;
