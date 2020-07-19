import React, { useContext } from "react";
import { Context } from "../../StateManagement/AppState";

import CategoryCell from "../CategoryCell/CategoryCell";

import "./Categories.scss";


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
