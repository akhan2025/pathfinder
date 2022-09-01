import "./Grid.css";
import GridCell from "./GridCell";
import React from "react";


function InitializeGridBoard(props) {
  let gridComponent = props.grid.map((row, rowIndex) =>
    row.map((gridCell, colIndex) => (
      <GridCell key={`${rowIndex} ${colIndex}`} 
      type={gridCell.type} 
      row={rowIndex}
      col={colIndex}/>
    ))
  );

  return <div className="Grid-Board">{gridComponent}</div>;
}

export default InitializeGridBoard;
