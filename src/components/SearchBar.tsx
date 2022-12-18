import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        className="w-96 rounded-3xl  bg-slate-400/10 py-2 px-4 text-gray-700 hover:bg-white max-sm:w-72"
        placeholder="Search Bar"
      ></input>
    </div>
  );
};

export default SearchBar;
