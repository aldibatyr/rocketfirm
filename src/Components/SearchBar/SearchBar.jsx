import React, { useState, useContext } from "react";

import "./SearchBar.scss";
import { Context } from "../../StateManagement/AppState";
import { useHistory } from "react-router-dom";
const SearchBar = ({ maximizeHeader, resetHeader }) => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const context = useContext(Context);
  const searchForPhotos = (e) => {
    e.preventDefault();
    context.setSearchQueries([...context.searchQueries, searchQuery]);
    window.localStorage.setItem(
      "searchQueries",
      JSON.stringify([...context.searchQueries, searchQuery])
    );
    context.fetchPhotosFromSearchRequest(searchQuery);
    context.resetAdditionalPosts();
    context.resetPageCount();
    setSearchQuery("");
    history.push("/searchResults");
  };

  return (
    <div className="searchBar">
      <form onSubmit={searchForPhotos}>
        <input
          type="text"
          name="search"
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <span></span>
    </div>
  );
};

export default SearchBar;
