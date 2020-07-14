import React, { createContext, useState } from "react";

export const Context = createContext();

const AppStateProvider = ({ children }) => {
  const [searchQueries, setSearchQueries] = useState(JSON.parse(window.localStorage.getItem('searchQueries')) || []);
  const [likedImages, setLikedImages] = useState(JSON.parse(window.localStorage.getItem('likedImages')) || []);
  const [collections, setCollections] = useState([]);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Context.Provider
        value={{
          searchQueries,
          setSearchQueries,
          likedImages,
          setLikedImages,
          collections,
          setCollections,
          posts,
          setPosts,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export default AppStateProvider;
