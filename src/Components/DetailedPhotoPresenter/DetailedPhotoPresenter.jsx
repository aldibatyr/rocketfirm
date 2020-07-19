import React from "react";

import DetailedPhotoControls from "../DetailedPhotoControls/DetailedPhotoControls";
import DetailedPhoto from "../DetailedPhoto/DetailedPhoto";
import SimilarTags from "../SimilarTags/SimilarTags";

import "./DetailedPhotoPresenter.scss";


const DetailedPhotoPresenter = ({ post }) => {
  return (
    <div id="top" className="outerContainer" style={{ position: "relative" }}>
      <div
        className="photoCoverSection"
        style={{
          backgroundImage: `url(${post.urls.regular})`,
        }}
      ></div>
      <div className="photoContent">
        <DetailedPhotoControls post={post} />
        <DetailedPhoto post={post} />
        <SimilarTags post={post} />
      </div>
    </div>
  );
};

export default DetailedPhotoPresenter;
