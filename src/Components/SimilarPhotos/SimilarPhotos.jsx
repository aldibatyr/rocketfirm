import React from "react";

import Post from "../Post/Post";

import "./SimilarPhotos.scss";


const SimilarPhotos = ({ post }) => {
  return (
    <div className="similarPhotosContainer">
      <div className="similarPhotosHeadline">
        <h2>Похожие фотографии</h2>
        <a to="#">Show more</a>
      </div>
      <div className="similarPhotos">
        {post.related_collections ? (
          post.related_collections.results.map((result) => {
            return (
              <Post post={result.cover_photo} key={result.cover_photo.id} />
            );
          })
        ) : (
          <span>
            Видимо, фото настолько ункальное что мы ничего не нашли{" "}
            <span role="img" alt="sad emoji" aria-label="sad emoji face">
              😟
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default SimilarPhotos;
