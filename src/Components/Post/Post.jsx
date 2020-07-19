import React, { useState } from "react";


import PostControls from "../PostControls/PostControls";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserInfo from "../UserInfo/UserInfo";

import "./Post.scss";

const Post = ({ post }) => {
  const [hovered, setHovered] = useState(false);
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
        <UserAvatar user={post.user} size={70} />
        <div style={{ height: "10px" }}></div>
        <UserInfo user={post.user} alignment="center" fontSize={30} />
        <PostControls post={post} />
      </div>
    </div>
  );
};

export default Post;

// TODO: Implement Download functionality

// import { unsplash } from "../../Networking/Networking";

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
