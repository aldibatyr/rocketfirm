import React, { useContext } from "react";
import "./Categories.scss";

import CategoryCell from "../CategoryCell/CategoryCell";
import { Context } from "../../StateManagement/AppState";

const Categories = ({ showingMobileSearch }) => {
  const context = useContext(Context);

  return (
    <>
      {showingMobileSearch ? (
        <div className="mobileSearchCategories">
          {context.collections.map((collection, i) => (
            <CategoryCell key={i} collection={collection} />
          ))}
        </div>
      ) : (
        <>
          <div className="categoriesOverlay" />
          <div className="categories">
            {context.collections.map((collection, i) => (
              <CategoryCell key={i} collection={collection} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Categories;
