import React from "react";
import { useContext } from "react";
import { Context } from "../../StateManagement/AppState";
const CategoryCell = ({ collection }) => {
  const context = useContext(Context);

  return (
    <span onClick={() => context.getCollectionPhotos(collection.id)}>
      {collection.title}
    </span>
  );
};

export default CategoryCell;
