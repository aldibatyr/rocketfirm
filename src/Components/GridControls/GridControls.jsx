import React from "react";
import { GridViewIcon, ListViewIcon } from "../../assets/svgs";
import "./GridControls.scss";

const GridControls = ({ listStyle, handleListStyleChange }) => {
  return (
    <div className="gridControls">
      <div className="iconWrapper" onClick={handleListStyleChange}>
        <GridViewIcon color={listStyle ? "gray" : "black"} />
      </div>
      <div className="iconWrapper" onClick={handleListStyleChange}>
        <ListViewIcon color={listStyle ? "black" : "gray"} />
      </div>
    </div>
  );
};

export default GridControls;
