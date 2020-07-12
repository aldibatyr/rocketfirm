import React from "react";
import "./SearchBar.scss";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" name="search" placeholder="Поиск" />
      <span></span>
    </div>
  );
};

export default SearchBar;
