import React from "react";
import "./LoadMoreButton.scss";

const LoadMoreButton = ({ actionFunction }) => {
  return (
    <button className="loadingMoreButton" onClick={actionFunction}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
