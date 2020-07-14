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

const Navigation = ({ minified, handleMinified }) => {
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
          className={minified ? "navButton" : "navButton hidden"}
        >
          <SearchIcon />
          <span>Поиск</span>
        </div>
        <Link className="navLink" to="/favorites">
          <FavoriteIcon size={23} />
          <span>Избранное</span>
        </Link>
        <div className="navButton">
          <HistoryIcon size={23} />
          <span>История поиска</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
