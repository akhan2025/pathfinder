import React, { useState } from "react";
import "./App.css";
import InitializeGridBoard from "./component/grid/Grid";
import { Box, Grid } from "grommet";
import MainSideBar from "./StartCard";
import Nav from "./Navbar";
import BFS from "./algorithms/BFS";
import DFS from "./algorithms/DFS";
import useUpdateGridCellsSequentially from "./hooks/useUpdateGridCellsSequentially";

// Set size of grid
const GRID_HEIGHT = 20;
const GRID_WIDTH = 30;

// Set initial starting location
let S_ROW = Math.floor(GRID_HEIGHT / 4);
let S_COL = Math.floor(GRID_WIDTH / 4);

/**
 * Creates the initial Grid object from the initial settings
 */ 
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

  //calulates the initial location for target
  let T_ROW = Math.floor(GRID_HEIGHT - 4);
  let T_COL = Math.floor(GRID_WIDTH - 4);
  initialGrid[T_ROW][T_COL].type = "target";

  return initialGrid;
}

/**
 * Main function from which everything else runs
 */
function App() {
  const [grid, setGrid] = useState(setUpInitialGrid());                           // Initializes the grid as a state and provides a setter function using the statehook
  const [selectedAlgo, setSelectedAlgo] = React.useState("Choose Algorithm");     // Initializes the selectAlgo as a state and provides a setter function using the statehook
  const [areVisitedGridCellsUpdating, setVisitedGridCellsToUpdateSequentially] =  // We can use the first value as a check to see if visualizing/clearing grid is legal
    useUpdateGridCellsSequentially(setGrid, (cell) => (cell.type = "visited"));   // and the second value is to update the grid

  const onResetBoardClick = () => {                                               // Provides function for Resetting the Board by mapping all visited cells as unvisited
    setGrid((prevGrid) =>                                                         // Passed as prop to MainSideBar to attach to 'Clear Board' button see line 105
      prevGrid.map((row) =>
        row.map((gridCell) =>
          gridCell.type === "visited"
            ? { ...gridCell, type: "unvisited" }
            : gridCell
        )
      )
    );
  };

  const onVisualizeClick = () => {                                                // Calls the algorithm selected to be visualized on the graph
    const in_progress = "under contruction! 👷‍♂️🚧";                                // Passed as prop to MainSideBar to attach to 'Visualize' button see line 106

    switch (selectedAlgo) {
      case "BFS":
        setVisitedGridCellsToUpdateSequentially(BFS(grid, S_ROW, S_COL));
        break;
      case "DFS":
        setVisitedGridCellsToUpdateSequentially(DFS(grid, S_ROW, S_COL));
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

  function changeAlgorithm(algo) {                                                // Passed as prop to MainSideBar to attach to dropdown see line 107
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
          resetBoardButtonDisabled={areVisitedGridCellsUpdating}
          onVisualizeClick={onVisualizeClick}
          visualizeButtonDisabled={areVisitedGridCellsUpdating}
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
