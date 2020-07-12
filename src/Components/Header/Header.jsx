import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";

import "./Header.scss";

const Header = () => {
  const [minified, setMinified] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      setMinified(true);
    } else {
      setMinified(false);
    }
  };

  const handleMinified = () => {
    setMinified(false);
  };
  return (
    <header className={minified ? "App-header scrolled" : "App-header"}>
      <div className="header-content">
        <Navigation minified={minified} handleMinified={handleMinified}/>
        <div className="searchBarContainer">
          <SearchBar />
        </div>
        <div className="categoriesContainer">
          <Categories />
        </div>
      </div>
    </header>
  );
};

export default Header;
