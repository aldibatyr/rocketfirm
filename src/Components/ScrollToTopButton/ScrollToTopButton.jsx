import React from "react";

import { ArrowUp } from "../../assets/svgs";

import "./ScrollToTopButton.scss";


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
