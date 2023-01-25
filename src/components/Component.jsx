import React from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '../components/WindyComponents/Accordion';
import Button from '../components/WindyComponents/Button';
import Tabs from './WindyComponents/Tabs';
import Toggle from './WindyComponents/Toggle';

function Component() {
  const location = useLocation();

  // TODO: create a reusable component that can wrap differet render methods to give consistent styling for the components view/mock-up code
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
          <Button />
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
