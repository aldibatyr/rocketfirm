import React, { useState, useContext, useRef } from "react";
import { Context } from "../../StateManagement/AppState";
import "./Home.scss";
import GridControls from "../../Components/GridControls/GridControls";
import PostsView from "../../Components/PostsView/PostsView";
import { LoadigIndicator, ArrowUp } from "../../assets/svgs";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";

const Home = () => {
  const [listStyle, setListStyle] = useState(false);
  const context = useContext(Context);
  const handleListStyleChange = () => {
    setListStyle(!listStyle);
  };

  useEffect(() => {
    window.addEventListener("scroll", loadAdditionalPosts);
    return () => {
      window.removeEventListener("scroll", loadAdditionalPosts);
    };
  });
  gsap.to(".loadingIndicator", {
    rotateZ: 360,
    repeat: -1,
    duration: 3,
  });

  const loadAdditionalPosts = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      context.fetchAdditionalPosts();
    }
  };

  return (
    <div
      id="top"
      style={{
        minHeight: "120vh",
        paddingTop: "440px",
        scrollBehavior: "smooth",
      }}
    >
      <ScrollToTopButton />
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
      <div style={{ minHeight: "120vh" }}>
        {context.loading ? (
          <div>Loading</div>
        ) : (
          <PostsView listStyle={listStyle} posts={context.posts} />
        )}
        {context.additionalPosts
          ? context.additionalPosts.map((postsArray, i) => {
              return (
                <PostsView listStyle={listStyle} posts={postsArray} key={i} />
              );
            })
          : ""}
      </div>
      <div className="loadingIndicatorWrapper">
        <div className="loadingIndicator">
          <LoadigIndicator />
        </div>
      </div>
    </div>
  );
};

export default Home;
