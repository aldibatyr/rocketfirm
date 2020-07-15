import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";

import "./Header.scss";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../StateManagement/AppState";

const Header = () => {
  const context = useContext(Context);
  const route = useLocation();
  console.log(route.pathname.includes("photo"));

  const [minified, setMinified] = useState(false);
  const [showingHistory, setShowingHistory] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (route.pathname.includes("photo")) {
      setMinified(true);
    } else {
      setMinified(false);
    }
  }, [route.pathname]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50 || route.pathname.includes("photo")) {
      setMinified(true);
    } else if (scrollTop < 50 || !route.pathname.includes("photo")) {
      setMinified(false);
    } else if (route.pathname.includes("photo")) {
      setMinified(true);
    } 
    console.log(scrollTop);
  };

  const handleMinified = () => {
    setMinified(false);
    setShowingHistory(false);
  };

  const handleShowHistory = () => {
    setShowingHistory(true);
    console.log(showingHistory);
  };

  // const showHistory = () => {
  //   return (

  //   );
  // };
  return (
    <header className={minified ? "App-header scrolled" : "App-header"}>
      <div className="header-content">
        <Navigation
          minified={minified}
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
                <span>Все чисто</span>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="searchBarContainer">
              <SearchBar />
            </div>
            <div className="categoriesContainer">
              <Categories />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
