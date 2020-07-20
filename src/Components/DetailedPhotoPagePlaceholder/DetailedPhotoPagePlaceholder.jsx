import React from "react";
import "./DetailedPhotoPagePlaceholder.scss";

const DetailedPhotoPagePlaceholder = () => {
  return (
    <div className="detailedPagePlaceholder">
      <div className="userInfoPlaceholder">
        <div className="avatarAndInfoPlaceholder">
          <div className="avatarPlaceholder"></div>
          <div className="infoPlaceholder">
            <div className="namePlaceholder"></div>
            <div className="linkPlaceholder"></div>
          </div>
        </div>
        <div className="postControlsPlaceholder">
          <div className="smallButtonPlaceholder"></div>
          <div className="largeButtonPlaceholder"></div>
        </div>
      </div>
      <div className="imagePlaceholder"></div>
    </div>
  );
};

export default DetailedPhotoPagePlaceholder;
