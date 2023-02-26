import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import ComponentsGridItem from '../components/ComponentsGridItem';
import { components, pageComponents } from '../data/componentCategories';

function Components() {
  return (
    <div className='my-10'>
      <div>
        <h1 className='text-4xl mb-10 text-indigo-600 font-bold text-center'>
          Browse our selection of components
        </h1>
        <div className='mt-10 w-2/3 mx-auto min-h-[calc(100vh-5rem)] grid grid-cols-3 gap-4 justify-center'>
          {components.map((component, index) => {
            return <ComponentsGridItem key={index} component={component} />;
            // turn components data in array of objects which holds the code && preview of components
            // TODO: create an improved UI for the components(list, grid, sidebar, etc.)
          })}
        </div>
        {/*another map same as above for the page components data */}
      </div>
    </div>
  );
}

export default withAuthenticationRequired(Components);
