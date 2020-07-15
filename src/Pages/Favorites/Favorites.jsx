import React from "react";
import PostsView from "../../Components/PostsView/PostsView";
import { useState } from "react";
import GridControls from "../../Components/GridControls/GridControls";
import { Context } from "../../StateManagement/AppState";
import { useContext } from "react";

const Favorites = () => {
  const [listStyle, setListStyle] = useState(false);
  const context = useContext(Context);
  const handleListStyleChange = () => {
    setListStyle(!listStyle);
  };
  return (
    <div style={{ paddingTop: "440px" }}>
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
      <PostsView listStyle={listStyle} posts={context.likedImages} />
    </div>
  );
};

export default Favorites;
