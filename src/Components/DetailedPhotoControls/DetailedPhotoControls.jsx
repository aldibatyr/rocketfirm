import React, { useContext, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { Context } from "../../StateManagement/AppState";

import UserAvatar from "../UserAvatar/UserAvatar";
import UserInfo from "../UserInfo/UserInfo";
import { FavoriteIcon, DownloadIcon } from "../../assets/svgs";

import "./DetailedPhotoControls.scss";

const DetailedPhotoControls = ({ post }) => {
  const context = useContext(Context);
  const { width } = useWindowSize();
  const [postLiked, setPostLiked] = useState(false);
  const handleAddToFavoritesClick = () => {
    context.addPhotoToFavorites(context.selectedPost);
    setPostLiked(true);
  };

  const determineIfLiked = async () => {
    let likedImageObj = await context.likedImages.find(
      (image) => image.id == post.id
    );
    if (likedImageObj !== undefined) {
      setPostLiked(true);
    }
  };

  useEffect(() => {
    determineIfLiked();
  }, []);

  return (
    <div className="photoControls">
      <div className="authorInfo">
        <UserAvatar user={post.user} size={50} />
        <div style={{ width: "10px" }}></div>
        <UserInfo
          mobile={width < 768}
          user={post.user}
          alignment="left"
          fontSize={24}
        />
      </div>
      <div className="likeAndDownload">
        <button className="likeButton" onClick={handleAddToFavoritesClick}>
          <FavoriteIcon size={25} color={postLiked ? "red" : "gray"} />
        </button>
        <div style={{ width: "10px" }}></div>
        <button className="downloadButton">
          <DownloadIcon size={34} />
          <span style={width < 768 ? { display: "none" } : {}}>Download</span>
        </button>
      </div>
    </div>
  );
};

export default DetailedPhotoControls;
