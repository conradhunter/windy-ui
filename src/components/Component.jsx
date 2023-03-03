import React from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '../components/WindyComponents/Accordion';
import MockUpCode from './MockUpCode';
import ButtonOne from './WindyComponents/Buttons/ButtonOne';
import Tabs from './WindyComponents/Tabs';
import Toggle from './WindyComponents/Toggle';

function Component() {
  const location = useLocation();

  // TODO: create a reusable component that can wrap different render methods to give consistent styling for the components view/mock-up code
  // use <code></code> for correct textstyling || add font to tailwind

  // TODO: map over the the group of a component(i.e. buttons) and return the mock-up code under each map item then the next & so on

  return (
    <section className='my-10 flex flex-col items-center'>
      {location.pathname === '/components/Accordion' && (
        <>
          <h1 className='text-2xl text-indigo-500 font-medium'>Accordion</h1>
          <Accordion />
        </>
      )}
      {location.pathname === '/components/Button' && (
        <>
          <h1 className='text-2xl text-indigo-500 font-medium'>Button</h1>
          <MockUpCode
            preview={<ButtonOne />}
            jsx={`
              <button className='bg-indigo-600 hover:bg-indigo-700 duration-200 px-8 uppercase w-56 py-3 inline-block rounded-xl text-white text-lg'>
                Button
              </button>
            `}
            html={`
            <button class='bg-indigo-600 hover:bg-indigo-700 duration-200 px-8 uppercase w-56 py-3 inline-block rounded-xl text-white text-lg'>
            Button
          </button>
            `}
          />
        </>
      )}
      {location.pathname === '/components/Toggle' && (
        <>
          <h1>Toggle</h1>
          <Toggle />
        </>
      )}
      {location.pathname === '/components/Tabs' && (
        <>
          <h1>Tabs</h1>
          <Tabs />
        </>
      )}
    </section>
  );
}

export default Component;
