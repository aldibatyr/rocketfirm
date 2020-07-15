import React, { useRef } from "react";
import "./DetailedPhoto.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../StateManagement/AppState";
import UserAvatar from "../../Components/UserAvatar/UserAvatar";
import UserInfo from "../../Components/UserInfo/UserInfo";
import { FavoriteIcon, DownloadIcon } from "../../assets/svgs";

const DetailedPhoto = () => {
  const context = useContext(Context);
  const image = useRef();
  let { id } = useParams();
  const currentPhoto = context.posts.find((post) => post.id === id);

  const makeDetailedPage = () => {
    return (
      <div className="outerContainer" style={{ position: "relative" }}>
        <div
          className="photoCoverSection"
          style={{ backgroundImage: `url(${currentPhoto.urls.regular})` }}
        ></div>
        <div className="photoContent">
          <div className="photoControls">
            <div className="authorInfo">
              <UserAvatar user={currentPhoto.user} size={50} />
              <div style={{ width: "10px" }}></div>
              <UserInfo
                user={currentPhoto.user}
                alignment="left"
                fontSize={24}
              />
            </div>
            <div className="likeAndDownload">
              <button className="likeButton">
                <FavoriteIcon size={25} color="gray" />
              </button>
              <div style={{ width: "10px" }}></div>
              <button className="downloadButton">
                <DownloadIcon size={34} />
                <span>Download</span>
              </button>
            </div>
          </div>
          <div className="detailedImageContainer">
            <img
              sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 4000/6000) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
              ref={image}
              className="detailedImage"
              srcSet={
                (currentPhoto.urls.full,
                currentPhoto.urls.raw,
                currentPhoto.urls.regular,
                currentPhoto.urls.small,
                currentPhoto.urls.full)
              }
              alt={currentPhoto.alt_description}
            />
          </div>
        </div>
      </div>
    );
  };

  return <div>{currentPhoto ? makeDetailedPage() : "Not Defined"}</div>;
};

export default DetailedPhoto;
