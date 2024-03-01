import React,{useState} from 'react';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

export const FindPolls = ({ onSearch, onFilterClick, onFetchPolls }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
    onFetchPolls(searchText);
  };

  return (
    <div className="flex justify-between mt-4 gap-4">
      <div className="border flex items-center rounded-[5px] px-4 w-[90%]">
        <IoIosSearch size={20} color="#dee2e6" />
        <input
          type="text"
          placeholder="Find polls"
          className="text-[14px] outline-none border-none"
          onChange={(e) => {
            const searchText = e.target.value;
            onSearch(searchText); 
            onFetchPolls(searchText);
          }}
        />
      </div>
      <div
        className="py-[13px] px-4 border flex items-center justify-center rounded-[5px] cursor-pointer"
        onClick={handleSearch}
      >
        <img src="images/filter.png" alt="filter-icon" className="" />
      </div>
    </div>
  );
};


FindPolls.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};


