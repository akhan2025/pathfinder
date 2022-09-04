import React, { useState, useCallback } from "react";
import "./App.css";
import InitializeGridBoard from "./component/grid/Grid";
import { Box, Grid } from "grommet";
import MainSideBar from "./StartCard";
import Nav from "./Navbar";
import BFS from "./algorithms/BFS";
import DFS from "./algorithms/DFS";
import useUpdateGridCellsSequentially from "./hooks/useUpdateGridCellsSequentially";
import { resetVisitedCells, setUpInitialGrid } from "./util/GridUtil";

// Set size of grid
const GRID_HEIGHT = 20;
const GRID_WIDTH = 30;

// Set initial starting location
const S_ROW = Math.floor(GRID_HEIGHT / 4);
const S_COL = Math.floor(GRID_WIDTH / 4);

// calculates the initial location for target
const T_ROW = Math.floor(GRID_HEIGHT - 4);
const T_COL = Math.floor(GRID_WIDTH - 4);

/**
 * Main function from which everything else runs
 */
function App() {
  // Initializes the grid as a state and provides a setter function using the statehook
  const [grid, setGrid] = useState(() => {
    const startPos = { row: S_ROW, col: S_COL };
    const targetPos = { row: T_ROW, col: T_COL };
    return setUpInitialGrid(GRID_HEIGHT, GRID_WIDTH, startPos, targetPos);
  });

  const [selectedAlgo, setSelectedAlgo] = React.useState("Choose Algorithm"); // Initializes the selectAlgo as a state and provides a setter function using the statehook
  const [areVisitedGridCellsUpdating, setVisitedGridCellsToUpdateSequentially] = // We can use the first value as a check to see if visualizing/clearing grid is legal
    useUpdateGridCellsSequentially(setGrid, (cell) => (cell.type = "visited")); // and the second value is to update the grid

  // Provides function for Resetting the Board by mapping all visited cells as unvisited
  // Passed as prop to MainSideBar to attach to 'Clear Board' button
  const onResetBoardClick = useCallback(() => {
    setGrid((prevGrid) => resetVisitedCells(prevGrid));
  }, []);

  // Calls the algorithm selected to be visualized on the graph
  // Passed as prop to MainSideBar to attach to 'Visualize' button
  const onVisualizeClick = useCallback(() => {
    const in_progress = "under contruction! 👷‍♂️🚧";
    let pathfinderAlgo = null;
    switch (selectedAlgo) {
      case "BFS":
        pathfinderAlgo = BFS;
        break;
      case "DFS":
        pathfinderAlgo = DFS;
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

    if (pathfinderAlgo === null) {
      return;
    }

    const resetGrid = resetVisitedCells(grid);
    setGrid(resetGrid);
    setVisitedGridCellsToUpdateSequentially(
      pathfinderAlgo(resetGrid, S_ROW, S_COL)
    );
  }, [grid, selectedAlgo, setVisitedGridCellsToUpdateSequentially]);

  const changeAlgorithm = useCallback((algo) => {
    // Passed as prop to MainSideBar to attach to dropdown
    setSelectedAlgo(algo);
  }, []);

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
          onResetBoardClick={
            areVisitedGridCellsUpdating ? null : onResetBoardClick
          }
          resetBoardButtonDisabled={areVisitedGridCellsUpdating}
          onVisualizeClick={
            areVisitedGridCellsUpdating ? null : onVisualizeClick
          }
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
