import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UnsplashLogo } from "../../assets/unsplashLogo.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/favoriteIcon.svg";
import { ReactComponent as HistoryIcon } from "../../assets/historyLogo.svg";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

import "./Navigation.scss";

const Navigation = ({ minified, handleMinified }) => {
  return (
    <nav>
      <Link className="navLink" to="/">
        <UnsplashLogo />
        <span className="logoText">ImageStock</span>
      </Link>
      <div className="navRightGroup">
        <div onClick={handleMinified} className={minified ? "navButton" : "navButton hidden"}>
          <SearchIcon />
          <span>Поиск</span>
        </div>
        <Link className="navLink" to="/favorites">
          <FavoriteIcon />
          <span>Избранное</span>
        </Link>
        <div className="navButton">
          <HistoryIcon />
          <span>История поиска</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
