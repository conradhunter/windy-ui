import React from 'react';
import ComponentsGridItem from './ComponentsGridItem';

function Playground() {
  return (
    <div className="flex flex-col justify-start h-[calc(100vh-5rem)] items-center">
      <h1 className="my-6">Playground for testing built components</h1>

      <div className="flex h-screen">
        <div className=''>
          {/* test components here */}
          <ComponentsGridItem />
        </div>
      </div>
    </div>
  );
}

export default Playground;
