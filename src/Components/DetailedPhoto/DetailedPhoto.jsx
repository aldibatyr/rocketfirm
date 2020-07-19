import React from "react";

import "./DetailedPhoto.scss";

const DetailedPhoto = ({ post }) => {
  return (
    <div className="detailedImageContainer">
      <img
        sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 4000/6000) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
        className="detailedImage"
        srcSet={
          (post.urls.full,
          post.urls.raw,
          post.urls.regular,
          post.urls.small,
          post.urls.full)
        }
        alt={post.alt_description}
      />
    </div>
  );
};

export default DetailedPhoto;
