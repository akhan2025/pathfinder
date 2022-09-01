import React, { useState } from "react";
import "./App.css";
import InitializeGridBoard from "./component/grid/Grid";
import { Box, Grid } from "grommet";
import MainSideBar from "./StartCard";
import Nav from "./Navbar";

const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;

function setUpInitialGrid() {
  const initialGrid = [];
  for (let row = 0; row < GRID_WIDTH; row++) {
    initialGrid.push([]);
    for (let col = 0; col < GRID_HEIGHT; col++) {
      initialGrid[row].push({
        type: "visited",
      });
    }
  }
  let S_ROW = Math.floor(GRID_HEIGHT / 4);
  let S_COL = Math.floor(GRID_WIDTH / 4);
  initialGrid[S_ROW][S_COL].type = "start";

  let T_ROW = Math.floor(GRID_HEIGHT - 4);
  let T_COL = Math.floor(GRID_WIDTH - 4);
  initialGrid[T_ROW][T_COL].type = "target";

  return initialGrid;
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
