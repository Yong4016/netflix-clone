import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './DropdownList.style.css';

const DropdownList = ({ onSort }) => {
  const sortByPopularityAsc = (movies) => {
    return movies.sort((a, b) => a.popularity - b.popularity);
  };
  const sortByPopularityDesc = (movies) => {
    return movies.sort((a, b) => b.popularity - a.popularity);
  };

  return (
    <>
      <h4 className='text-white'>Sort by</h4>
      <Dropdown data-bs-theme='dark'>
        <Dropdown.Toggle
          variant='danger'
          className='dropdown-filter'
        >
          Sort
        </Dropdown.Toggle>

        <Dropdown.Menu
          className='dropdown-items'
          variant='secondary'
          data-bs-theme='dark'
        >
          <Dropdown.Item
            onClick={() => {
              onSort(sortByPopularityAsc);
            }}
          >
            Popularity (low-high)
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              onSort(sortByPopularityDesc);
            }}
          >
            Popularity (high-low)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownList;
