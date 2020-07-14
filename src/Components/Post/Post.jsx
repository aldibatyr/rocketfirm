import React, { useState } from "react";
import "./Post.scss";
import { keys } from "../../keys";
import { FavoriteIcon, PanIcon, DownloadIcon } from "../../assets/svgs";
import {
  handleFavoriteZoom,
  handleFavoriteNormalize,
  handlePanNormalize,
  handlePanZoom,
  handleDownloadNormalize,
  handleDownloadZoom,
} from "./postAnimations";
// import { unsplash } from "../../Networking/Networking";

const Post = ({ post }) => {
  const [hovered, setHovered] = useState(false);
  // const handleDownload = async () => {
  //   const photoData = await unsplash.photos.getPhoto(post.id);
  //   const json = await photoData.json();
  //   unsplash.photos.downloadPhoto(json);
  //   // const data = await fetch(
  //   //   `${post.links.download_location}/client_id=${keys.ACCESS_KEY}`
  //   // );
  //   // const blob = await data.blob();
  //   // console.log(blob);
  // };

  const handleHover = () => {
    setHovered(true);
  };
  const handleOffHover = () => {
    setHovered(false);
  };
  return (
    <div
      className={hovered ? "imagePost hovered" : "imagePost"}
      onMouseEnter={handleHover}
      onMouseLeave={handleOffHover}
    >
      {/* just to make the size of a container of an appropriate size */}
      <img
        className="backgroundImage"
        src={post.urls.small}
        alt={post.alt_description}
      />
      <div className="content">
        <img src={post.user.profile_image.medium} alt={post.user.name} />
        <p className="authorName">{post.user.name}</p>
        <a href={post.user.links.html}>@{post.user.username}</a>
        <div className="postControls">
          <div
            className="controlWrapper favoriteIcon"
            onMouseEnter={handleFavoriteZoom}
            onMouseLeave={handleFavoriteNormalize}
          >
            <FavoriteIcon size={28} />
          </div>
          <div
            className="controlWrapper panIcon"
            onMouseEnter={handlePanZoom}
            onMouseLeave={handlePanNormalize}
          >
            <PanIcon size={28} />
          </div>
          <a
            href={`${post.links.download_location}/client_id=${keys.ACCESS_KEY}`}
            className="controlWrapper downloadIcon"
            onMouseEnter={handleDownloadZoom}
            onMouseLeave={handleDownloadNormalize}
            // onClick={handleDownload}
          >
            <DownloadIcon size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
