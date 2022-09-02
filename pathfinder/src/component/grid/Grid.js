import "./Grid.css";
import GridCell from "./GridCell";
import React from "react";

/**
 * Creates the actual visual grid from the grid object 
 * 
 * @param {*} props Pass in the grid for this function to map to actual JSX components
 * @returns {JSX.IntrinsicElements.div} Div of entire grid representing the grid state
 */
function InitializeGridBoard(props) {
  let gridComponent = props.grid.map((row, rowIndex) => // for each row in the grid
    row.map((gridCell, colIndex) => (                   // for each cell in each row
      <GridCell key={`${rowIndex} ${colIndex}`}         // create a GridCell representing the cell in the grid object
      type={gridCell.type} 
      row={rowIndex}
      col={colIndex}/>
    ))
  );

  return <div className="Grid-Board">{gridComponent}</div>;
}

export default InitializeGridBoard;
