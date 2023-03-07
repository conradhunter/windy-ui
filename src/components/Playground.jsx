import React from 'react';

function Playground() {
  return (
    <div className='flex flex-col justify-start h-[calc(100vh-5rem)] items-center'>
      <h1 className='my-6'>Playground for testing built components</h1>

      <div className='flex h-screen justify-center'>
        <div className='w-screen pl-44'>
          {/* test components here */}
          {/* <MockUpCode preview={'preview'} jsx={'jsx'} html={'html'} /> */}
        </div>
      </div>
    </div>
  );
}

export default Playground;
