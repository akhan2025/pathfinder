import React from "react";
import "./GridCell.css";

// Represents a single square in the grid

function GridCell(props) {

  const classes = `grid-cell cell-${props.type}`;
  return <div className={classes}/>;
}

export default GridCell