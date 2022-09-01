import React, { useState } from "react";
import "./App.css";
import InitializeGridBoard from "./component/grid/Grid";
import { Box, Grid } from "grommet";
import MainSideBar from "./StartCard";
import Nav from "./Navbar";
import Queue from "./Queue";


const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;

let S_ROW = Math.floor(GRID_HEIGHT / 4);
let S_COL = Math.floor(GRID_WIDTH / 4);

function setUpInitialGrid() {
  const initialGrid = [];
  for (let row = 0; row < GRID_WIDTH; row++) {
    initialGrid.push([]);
    for (let col = 0; col < GRID_HEIGHT; col++) {
      initialGrid[row].push({
        type: "visited",
        row: row,
        col: col
      });
    }
  }
  initialGrid[S_ROW][S_COL].type = "start";

  let T_ROW = Math.floor(GRID_HEIGHT - 4);
  let T_COL = Math.floor(GRID_WIDTH - 4);
  initialGrid[T_ROW][T_COL].type = "target";

  return initialGrid;
}

function visitAll(grid) {

  const queue = new Queue();
  console.log('created queue');
  queue.enqueue(grid[S_ROW][S_COL]);
  console.log('enqueued start');
  let passes = 0;
  while (!queue.isEmpty) {
    let cell = queue.dequeue()
    if (cell.type === 'unvisited') {
      cell.type = 'visited'
    }
    else if (cell.type === 'visited') {
      continue
    }
    let row = cell.row
    let col = cell.col

    if (row - 1 >= 0 && grid[row - 1][col].type === 'unvisited') {
      queue.enqueue(grid[row - 1][col])
    }
    if (row + 1 < grid.length && grid[row + 1][col].type === 'unvisited') {
      queue.enqueue(grid[row + 1][col])
    }
    if (col - 1 >= 0 && grid[row][col - 1].type === 'unvisited') {
      queue.enqueue(grid[row][col - 1])
    }
    if (col + 1 < grid.length && grid[row][col + 1].type === 'unvisited') {
      queue.enqueue(grid[row][col + 1])
    }
    passes++;
  }

  console.log(passes)
  return [...grid]
}

function App() {
  const [grid, setGrid] = useState(setUpInitialGrid());

  const onResetBoardClick = () => {
    setGrid((prevGrid) =>
      prevGrid.map((row) =>
        row.map((gridCell) =>
          gridCell.type === "visited"
            ? { ...gridCell, type: "unvisited" }
            : gridCell
        )
      )
    );
  };


  const [value, setValue] = React.useState('Choose Algorithm');
  
  function mapTest(algo){
    console.log(algo)
    setValue(algo)
  }

  const onVisualizeClick = () => {
    setGrid((prevGrid) => visitAll(prevGrid))
  }

  return (
    <Grid
      rows={["xxsmall", "small", "small", "small"]}
      columns={["medium", "auto"]}
      areas={[
        { name: "nav", start: [0, 0], end: [1, 0] },
        { name: "card", start: [0, 1], end: [0, 3] },
        { name: "graph", start: [1, 1], end: [1, 3] },
      ]}
      gap="medium"
    >
      <Box gridArea="nav" justify="center">
        <Nav />
      </Box>
      <Box border={{ color: "white", style: "hidden" }} gridArea="card">
        <MainSideBar
          onResetBoardClick={onResetBoardClick}
          onVisualizeClick={onVisualizeClick}
          setValue={mapTest}
          value={value}
        />
      </Box>
      <Box
        border={{ color: "border", style: "dashed" }}
        gridArea="graph"
        justify="center"
        pad="small"
      >
        <InitializeGridBoard grid={grid} />
      </Box>
    </Grid>
  );
}

export default App;
