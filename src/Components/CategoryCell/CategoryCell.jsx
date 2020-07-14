import React from "react";
import { useContext } from "react";
import { Context } from "../../StateManagement/AppState";
import { unsplash } from "../../Networking/Networking";
const CategoryCell = ({ collection }) => {
  const context = useContext(Context);
  const handleCategoryClick = async (id) => {
    const photosData = await unsplash.collections.getCollectionPhotos(
      id,
      1,
      24
    );
    const photosJson = await photosData.json();
    await context.setPosts(photosJson);
    // window.localStorage.setItem("posts", JSON.stringify(photosJson));
  };
  return (
    <span onClick={() => handleCategoryClick(collection.id)}>
      {collection.title}
    </span>
  );
};

export default CategoryCell;
