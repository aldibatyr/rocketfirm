import React, { createContext, useState } from "react";

export const Context = createContext();

const AppStateProvider = ({ children }) => {
  const [searchQueries, setSearchQueries] = useState([]);
  const [likedImages, setLikedImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Context.Provider
        value={{
          searchQueries,
          setSearchQueries,
          likedImages,
          setLikedImages,
          categories,
          setCategories,
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
