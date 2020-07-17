import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FavoriteIcon,
  HistoryIcon,
  SearchIcon,
  UnsplashLogo,
} from "../../assets/svgs";

import "./Navigation.scss";
import { Context } from "../../StateManagement/AppState";

const Navigation = ({
  minified,
  handleMinified,
  handleShowHistory,
  showingHistory,
}) => {
  const context = useContext(Context);

  return (
    <nav>
      <Link onClick={context.fetchData} className="navLink" to="/">
        <UnsplashLogo />
        <span className="logoText">ImageStock</span>
      </Link>
      <div className="navRightGroup">
        <div
          style={showingHistory ? { visibility: "visible" } : {}}
          onClick={handleMinified}
          className={
            minified
              ? "navButton underlineable"
              : "navButton underlinable hidden"
          }
        >
          <SearchIcon />
          <div className="iconName">
            <span>Поиск</span>
            <div className="underline"></div>
          </div>
        </div>
        <Link className="navLink underlineable" to="/favorites">
          <FavoriteIcon size={23} color="white" />
          <div className="iconName">
            <span>Избранное</span>
            <div className="underline"></div>
          </div>
        </Link>
        <div onClick={handleShowHistory} className="navButton underlineable">
          <HistoryIcon size={23} />
          <div className="iconName">
            <span>История поиска</span>
            <div className="underline"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
