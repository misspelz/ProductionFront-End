import { BiSearch } from "react-icons/bi";
import { GoFilter } from "react-icons/go";
import { useState } from "react";
import SortByModal from "../Modals/SortByModal";

const ConnectSearch = ({ handleSearchResultContainerClick }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter" && inputValue.length >= 1) {
  //     handleSearchResultContainerClick();
  //   }
  // };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="business-search-container">
      <div className="search-container-busi rounded-[30px]">
        <BiSearch size={20} />
        <input
          type="text"
          className="search-inp-bus "
          placeholder="Search users, businesses"
          value={inputValue}
          onChange={handleInputChange}
          // onKeyDown={handleKeyDown}
        />
      </div>
      {isFilterOpen && (
        <div className="modal-full-container">
          <SortByModal handleFilterClose={handleFilterClose} />
        </div>
      )}
      {/* <div className="filter-search-bus" onClick={handleFilterClick}>
        <GoFilter />
      </div> */}
    </div>
  );
};

export default ConnectSearch;
