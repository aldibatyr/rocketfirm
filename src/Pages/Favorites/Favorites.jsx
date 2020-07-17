import React from "react";
import PostsView from "../../Components/PostsView/PostsView";
import { useState } from "react";
import GridControls from "../../Components/GridControls/GridControls";
import { Context } from "../../StateManagement/AppState";
import { useContext } from "react";

import "./Favorites.scss";

const Favorites = () => {
  const [listStyle, setListStyle] = useState(false);
  const context = useContext(Context);
  const handleListStyleChange = () => {
    setListStyle(!listStyle);
  };
  return (
    <div style={{ paddingTop: "110px" }}>
      <h1 className="pageTitle">Избранное</h1>
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
      <PostsView listStyle={listStyle} posts={context.likedImages} />
    </div>
  );
};

export default Favorites;
