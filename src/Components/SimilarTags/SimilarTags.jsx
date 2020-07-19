import React from "react";

import "./SimilarTags.scss";

const SimilarTags = ({ post }) => {
  return (
    <div className="similarTags">
      <h3>Похожие теги</h3>
      <div className="tagsContainer">
        {post.tags ? (
          post.tags.map((tag, i) => {
            return (
              <button className="tagWrapper" key={i}>
                <span>{tag.title}</span>
              </button>
            );
          })
        ) : (
          <span>Вечный ненаход</span>
        )}
      </div>
    </div>
  );
};

export default SimilarTags;
