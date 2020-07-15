import React, { useState, useContext } from "react";
import { Context } from "../../StateManagement/AppState";
import "./Home.scss";
import GridControls from "../../Components/GridControls/GridControls";
import PostsView from "../../Components/PostsView/PostsView";

const Home = () => {
  const [listStyle, setListStyle] = useState(false);
  const context = useContext(Context);
  const handleListStyleChange = () => {
    setListStyle(!listStyle);
  };
  return (
    <div style={{ minHeight: "120vh", paddingTop: "440px" }}>
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
      {context.posts !== [] ? (
        <PostsView listStyle={listStyle} posts={context.posts} />
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Home;
