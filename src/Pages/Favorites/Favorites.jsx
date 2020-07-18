import React, { useEffect } from "react";
import PostsView from "../../Components/PostsView/PostsView";
import { useState } from "react";
import GridControls from "../../Components/GridControls/GridControls";
import { Context } from "../../StateManagement/AppState";
import { useContext } from "react";
import { useWindowSize } from "react-use";

import "./Favorites.scss";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";

const Favorites = () => {
  const [listStyle, setListStyle] = useState(false);
  const { width } = useWindowSize();
  const context = useContext(Context);
  const handleListStyleChange = () => {
    setListStyle(!listStyle);
  };

  useEffect(() => {
    if (width < 768) {
      setListStyle(true);
    }
  }, []);
  return (
    <div id="top" style={{ paddingTop: "110px" }}>
      <h1 className="pageTitle">Избранное</h1>
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
      <PostsView listStyle={listStyle} posts={context.likedImages} />
      <ScrollToTopButton />
    </div>
  );
};

export default Favorites;
