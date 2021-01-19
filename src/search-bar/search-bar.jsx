import React from "react";
import "./search-bar.style.css";

const SearchBar = ({ onSearch, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
};
// onInput={monsters.include}
export default SearchBar;
