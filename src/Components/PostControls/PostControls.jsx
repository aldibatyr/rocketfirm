import React, { useContext } from "react";
import "./PostControls.scss";
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
import { Context } from "../../StateManagement/AppState";
import { Link } from "react-router-dom";

const PostControls = ({ post }) => {
  const context = useContext(Context);

  const handleAddToFavorites = () => {
    context.setLikedImages([...context.likedImages, post]);
    window.localStorage.setItem(
      "likedImages",
      JSON.stringify([...context.likedImages, post])
    );
  };

  return (
    <div className="postControls">
      <div
        className="controlWrapper favoriteIcon"
        onMouseEnter={handleFavoriteZoom}
        onMouseLeave={handleFavoriteNormalize}
        onClick={handleAddToFavorites}
      >
        <FavoriteIcon size={28} color="white" />
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
