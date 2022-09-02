import React from "react";
import "./GridCell.css";

/**
 * 
 * @param {*} props Pass in any information specific to the cell
 * @returns {JSX.IntrinsicElements.div} Single grid cell with a set class
 */
function GridCell(props) {

  const classes = `grid-cell cell-${props.type}`;
  return <div className={classes}/>;
}

export default React.memo(GridCell);