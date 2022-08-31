import "./Grid.css";
import GridCell from "./GridCell";
import React from "react";

const WIDTH = 10;
const HEIGHT = 10;

function InitializeGridBoard(
  ) {
    console.log('run')
    const grid = [];
  let S_ROW = Math.floor(HEIGHT / 4);
  let S_COL = Math.floor(WIDTH / 4);

  let T_ROW = Math.floor(HEIGHT - 4);
  let T_COL = Math.floor(WIDTH - 4);

  for (let row = 0; row < WIDTH; row++) {
    grid.push([]);
    for (let col = 0; col < HEIGHT; col++) {
      grid[row].push(<GridCell 
        key={`${col} ${row}`} 
        type="unvisited" 
        /*add params here*/
        />);
    }
  }

  grid[S_ROW][S_COL] = <GridCell key={`${S_ROW} ${S_COL}`} type="start" />;
  grid[T_ROW][T_COL] = <GridCell key={`${T_ROW} ${S_COL}`} type="target"/>;

  return <div className="Grid-Board">{grid}</div>;
}

export default InitializeGridBoard;
