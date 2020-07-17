import React from "react";
import "./ScrollToTopButton.scss";
import { ArrowUp } from "../../assets/svgs";

const ScrollToTopButton = () => {
  return (
    <a href="#top" className="scrollToTop">
      <div className="square">
        <ArrowUp />
      </div>
    </a>
  );
};

export default ScrollToTopButton;
