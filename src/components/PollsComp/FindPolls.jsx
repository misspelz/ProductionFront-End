import { IoIosSearch } from "react-icons/io";

export const FindPolls = ({ onSearch, onFetchPolls }) => {
  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    onSearch(searchText);
    // onFetchPolls(searchText);
  };

  return (
    <div className="mt-4 w-full">
      <div className="border flex items-center rounded-[5px] px-4 w-full">
        <IoIosSearch size={20} color="#dee2e6" />
        <input
          type="text"
          placeholder="Find polls"
          className="text-[14px] outline-none border-none w-full"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};
