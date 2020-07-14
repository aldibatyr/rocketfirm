import React, { useState, useContext } from "react";
import "./SearchBar.scss";
import { Context } from "../../StateManagement/AppState";
import { unsplash } from "../../Networking/Networking";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const context = useContext(Context);
  const searchForPhotos = async (e) => {
    e.preventDefault();
    context.setSearchQueries([...context.searchQueries, searchQuery]);
    window.localStorage.setItem(
      "searchQueries",
      JSON.stringify([...context.searchQueries, searchQuery])
    );
    const photosData = await unsplash.search.photos(searchQuery, 1, 24);
    const photosJson = await photosData.json();
    await context.setPosts(photosJson.results);
  };

  return (
    <div className="searchBar">
      <form onSubmit={searchForPhotos}>
        <input
          type="text"
          name="search"
          placeholder="Поиск"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <span></span>
    </div>
  );
};

export default SearchBar;
