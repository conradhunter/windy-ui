import React from 'react';
import MockUpCode from './MockUpCode';
import Pagination from './WindyComponents/Pagination';
import Skeleton from './WindyComponents/Skeleton';

function Playground() {
  return (
    <div className='flex flex-col justify-start h-[calc(100vh-5rem)] items-center'>
      <h1 className='my-6'>Playground for testing built components</h1>

      <div className='flex h-screen justify-center'>
        <div className='w-screen pl-44'>
          {/* test components here */}
          {/* <MockUpCode /> */}
          {/* <Skeleton height={'h-72'} width={'w-72'} /> */}
          {/* <Pagination /> */}
        </div>
      </div>
    </div>
  );
}

export default Playground;
