import React, { useState } from "react";
import "./Home.scss";
import GridControls from "../../Components/GridControls/GridControls";
import PostsView from "../../Components/PostsView/PostsView";

const Home = () => {
  const [listStyle, setListStyle] = useState(false);

  const handleListStyleChange = () => {
    setListStyle(!listStyle);
  };
  return (
    <div style={{ minHeight: "120vh", paddingTop: "440px" }}>
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
      <PostsView listStyle={listStyle} />
    </div>
  );
};

export default Home;
