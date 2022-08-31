import React from "react";
import "./GridCell.css";

// Represents a single square in the grid

export default function GridCell(props) {
  const classes = `grid-cell color-${props.color}`;
  return <div className={classes} />;
}
