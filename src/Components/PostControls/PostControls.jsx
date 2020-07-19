import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../StateManagement/AppState";

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

import "./PostControls.scss";

const PostControls = ({ post }) => {
  const context = useContext(Context);

  const [postLiked, setPostLiked] = useState(false);

  useEffect(() => {
    let likedImageObj = context.likedImages.find(
      (image) => image.id == post.id
    );
    if (likedImageObj !== undefined) {
      setPostLiked(true);
    }
  }, []);

  return (
    <div className="postControls">
      <div
        className="controlWrapper favoriteIcon"
        onMouseEnter={handleFavoriteZoom}
        onMouseLeave={handleFavoriteNormalize}
        onClick={() => {
          context.addPhotoToFavorites(post);
          setPostLiked(true);
        }}
      >
        <FavoriteIcon size={28} color={postLiked ? "red" : "white"} />
      </div>
      <Link
        to={{
          pathname: `/photo/${post.id}`,
        }}
        className="controlWrapper panIcon"
        onMouseEnter={handlePanZoom}
        onMouseLeave={handlePanNormalize}
      >
        <PanIcon size={28} />
      </Link>
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
  );
};

export default PostControls;
