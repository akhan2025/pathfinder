import "./Grid.css";
import GridCell from "./GridCell";
import React from "react";

const WIDTH = 20;
const HEIGHT = 20;

function GridBoard() {
  const grid = [];
  for (let row = 0; row < WIDTH; row++) {
    grid.push([]);
    for (let col = 0; col < HEIGHT; col++) {
      grid[row].push(<GridCell key={`${col}${row}`} color="1" />);
    }
  }

  return <div className="Grid-Board">{grid}</div>;
}

export default GridBoard;
