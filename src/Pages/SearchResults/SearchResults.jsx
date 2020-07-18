import React, { useState, useContext, useEffect } from "react";
import GridControls from "../../Components/GridControls/GridControls";
import PostsView from "../../Components/PostsView/PostsView";
import { Context } from "../../StateManagement/AppState";
import { LoadigIndicator } from "../../assets/svgs";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";
import gsap from "gsap";
import LoadMoreButton from "../../Components/LoadMoreButton/LoadMoreButton";

const SearchResults = () => {
  const [listStyle, setListStyle] = useState(false);
  const context = useContext(Context);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    gsap.to(".loadingIndicator", {
      rotateZ: 360,
      repeat: -1,
      duration: 3,
    });
  }, []);

  const handleListStyleChange = () => {
    setListStyle(!listStyle);
  };

  const loadAdditionalPosts = async () => {
    setLoadingMore(true);
    await context.fetchAdditionalFromSearchRequest();
    setLoadingMore(false);
  };

  return (
    <div id="top" style={{ paddingTop: "100px" }}>
      <h1 className="pageTitle">{context.currentSearchQuery.toUpperCase()}</h1>
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
      <PostsView listStyle={listStyle} posts={context.posts} />
      {context.additionalPosts
        ? context.additionalPosts.map((postsArray, i) => {
            return (
              <PostsView listStyle={listStyle} posts={postsArray} key={i} />
            );
          })
        : ""}
      <div className="loadingIndicatorWrapper">
        {loadingMore ? (
          <div className="loadingIndicator">
            <LoadigIndicator />
          </div>
        ) : (
          <LoadMoreButton actionFunction={loadAdditionalPosts} />
        )}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default SearchResults;
