import React, { useState } from "react";
import "./App.css";
import InitializeGridBoard from "./component/grid/Grid";
import { Box, Grid } from "grommet";
import MainSideBar from "./StartCard";
import Nav from "./Navbar";
import BFS from "./algorithms/BFS";
import useUpdateGridCellsSequentially from "./hooks/useUpdateGridCellsSequentially";

const GRID_HEIGHT = 20;
const GRID_WIDTH = 30;

let S_ROW = Math.floor(GRID_HEIGHT / 4);
let S_COL = Math.floor(GRID_WIDTH / 4);

function setUpInitialGrid() {
  const initialGrid = [];
  for (let row = 0; row < GRID_HEIGHT; row++) {
    initialGrid.push([]);
    for (let col = 0; col < GRID_WIDTH; col++) {
      initialGrid[row].push({
        type: "unvisited",
        row: row,
        col: col,
      });
    }
  }
  console.log("starting cell: ", S_ROW, S_COL);
  initialGrid[S_ROW][S_COL].type = "start";

  let T_ROW = Math.floor(GRID_HEIGHT - 4);
  let T_COL = Math.floor(GRID_WIDTH - 4);
  initialGrid[T_ROW][T_COL].type = "target";

  return initialGrid;
}

function App() {
  const [grid, setGrid] = useState(setUpInitialGrid());
  const [selectedAlgo, setSelectedAlgo] = React.useState("Choose Algorithm");
  const setVisitedGridCellsToUpdateSequentially =
    useUpdateGridCellsSequentially(setGrid, (cell) => (cell.type = "visited"));

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

  const onVisualizeClick = () => {
    const in_progress = "under contruction! 👷‍♂️🚧";

    switch (selectedAlgo) {
      case "BFS":
        setVisitedGridCellsToUpdateSequentially(BFS(grid, S_ROW, S_COL));
        break;
      case "DFS":
        alert(in_progress);
        break;
      case "Dijkstras":
        alert(in_progress);
        break;
      case "A*":
        alert(in_progress);
        break;
      default: // change this to a Grommet component
        alert("Please select an Algo!");
        break;
    }
  };

  function changeAlgorithm(algo) {
    console.log(algo);
    setSelectedAlgo(algo);
  }

  return (
    <Grid
      rows={["xxsmall", "small", "small", "auto"]}
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
      <Box gridArea="card">
        <MainSideBar
          onResetBoardClick={onResetBoardClick}
          onVisualizeClick={onVisualizeClick}
          changeAlgorithm={changeAlgorithm}
          selectedAlgo={selectedAlgo}
        />
      </Box>
      <Box gridArea="graph">
        <InitializeGridBoard grid={grid} />
      </Box>
    </Grid>
  );
}

export default App;
