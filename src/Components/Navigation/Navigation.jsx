import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FavoriteIcon,
  HistoryIcon,
  SearchIcon,
  UnsplashLogo,
} from "../../assets/svgs";
import { unsplash } from "../../Networking/Networking";

import "./Navigation.scss";
import { Context } from "../../StateManagement/AppState";

const Navigation = ({ minified, handleMinified, handleShowHistory }) => {
  const context = useContext(Context);
  const fetchInitialData = async () => {
    const imagesData = await unsplash.photos.listPhotos(1, 25);
    const json = await imagesData.json();
    context.setPosts(json);
  };
  return (
    <nav>
      <Link onClick={fetchInitialData} className="navLink" to="/">
        <UnsplashLogo />
        <span className="logoText">ImageStock</span>
      </Link>
      <div className="navRightGroup">
        <div
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
