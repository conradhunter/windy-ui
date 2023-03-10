import React from 'react';

const PaginationOne = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const isActive = number === currentPage;
    return (
      <li
        key={number}
        onClick={() => handlePageChange(number)}
        className={`px-3 py-1 ${
          isActive ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
        } hover:bg-gray-300 cursor-pointer`}
      >
        {number}
      </li>
    );
  });

  return (
    <div className='flex justify-center mt-4'>
      <ul className='flex'>
        <li
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-3 py-1 ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-700'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
          }`}
          disabled={currentPage === 1}
        >
          Prev
        </li>
        {renderPageNumbers}
        <li
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-3 py-1 ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-700'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default PaginationOne;
