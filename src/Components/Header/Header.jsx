import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";

import "./Header.scss";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../StateManagement/AppState";
import { useWindowSize } from "react-use";
import {
  minimizeHeader,
  expandHeader,
  loadInitialHeader,
} from "./headerAnimations";

const Header = () => {
  const context = useContext(Context);
  const route = useLocation();
  const [minified, setMinified] = useState(true);
  const [showingHistory, setShowingHistory] = useState(false);
  const [showingMobileSearch, setShowingMobileSearch] = useState(false);

  const { width } = useWindowSize();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      route.pathname.includes("photo") ||
      route.pathname.includes("favorites") ||
      route.pathname.includes("searchResults")
    ) {
      minimizeHeader();
      setMinified(true);
    } else {
      loadInitialHeader(width);
      setMinified(false);
    }
    setShowingMobileSearch(false);
  }, [route.pathname]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (
      (!route.pathname.includes("photo") ||
        !route.pathname.includes("favorites")) &&
      scrollTop > 50
    ) {
      setMinified(true);
      minimizeHeader();
    }
  };

  const handleMinified = () => {
    setMinified(false);
    expandHeader(width);
    setShowingHistory(false);
    if (width < 768) {
      setShowingMobileSearch(true);
    }
  };

  const handleShowHistory = () => {
    setMinified(false);
    expandHeader(width);
    setShowingHistory(true);
  };

  return (
    <header className="App-header">
      <div className="header-content">
        <Navigation
          minified={minified}
          showingHistory={showingHistory}
          handleMinified={handleMinified}
          handleShowHistory={handleShowHistory}
        />
        {showingHistory ? (
          <div className="historyContainer">
            <h3>Ваши запросы</h3>
            <div className="requestsHistory">
              {context.searchQueries !== [] ? (
                context.searchQueries.map((query) => <span>{query}</span>)
              ) : (
                <span className="emptyListIndicator">Все чисто</span>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="searchBarContainer">
              <SearchBar />
            </div>
            <div className="categoriesContainer">
              <Categories showingMobileSearch={showingMobileSearch} />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
