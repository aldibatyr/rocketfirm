import React, { useState, useContext, useEffect } from "react";
import GridControls from "../../Components/GridControls/GridControls";
import { Context } from "../../StateManagement/AppState";

const SearchResults = () => {
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

  const loadAdditionalPosts = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // context.fetchAdditionalPosts();
    }
  };
  return (
    <div>
      <GridControls
        listStyle={listStyle}
        handleListStyleChange={handleListStyleChange}
      />
    </div>
  );
};

export default SearchResults;
