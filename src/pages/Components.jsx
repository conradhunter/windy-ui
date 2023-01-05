import React from 'react';
import ComponentsSideBar from '../components/ComponentsSideBar';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function Components({ setValue, value }) {
  const location = useLocation();

  if (location.pathname === '/components') {
    // hide nav bar (top nav)
    // then show nav bar if cursor is in the top part of page, animate nav to show from the top (fade from top) (animate on scroll library)
  }

  const handleSearch = () => {
    // Search/filter components i.e. button then render an array of the components that match the search params
  };

  return (
    <div className="flex justify-evenly">
      <ComponentsSideBar />
      <div
        id="searchInput"
        className="w-10/12 bg-gray-800 right-0 absolute h-16 flex items-center justify-center border-t-2 border-t-gray-700"
      >
        <div className="bg-white flex rounded-full px-6">
          <input
            type="text"
            placeholder="Search components"
            className="w-72 pl-2 my-2 bg-white rounded-lg outline-none"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSearch}>
            <SearchIcon className="" />
          </button>
        </div>
      </div>
      <div>
        {/* On initial page mount, render a gallery/grid display off all components that the user can scroll through */}
      </div>
    </div>
  );
}

export default Components;
