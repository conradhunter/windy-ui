import React from 'react';
import ComponentsGridItem from '../components/ComponentsGridItem';
import { components, pageComponents } from '../data/componentCategories';

function Components() {
  // TODO: Create new grid layout for the components to be viewed rather than using the sidebar

  return (
    <div className=''>
      <div>
        <h1 className='text-4xl mb-10 text-indigo-600 font-bold text-center mt-10'>
          Browse our selection of components
        </h1>
        <div className='mt-10 w-2/3 mx-auto min-h-[calc(100vh-5rem)] grid grid-cols-3 gap-4 justify-center'>
          {components.map((component, index) => {
            return <ComponentsGridItem key={index} component={component} />;
            // turn components data in array of objects which holds the code && preview of components
          })}
        </div>
        {/*another map same as above for the page components data */}
      </div>
    </div>
  );
}

export default Components;
