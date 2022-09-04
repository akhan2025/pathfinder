/**
 * Creates the initial Grid object from the initial settings
 */
export function setUpInitialGrid(height, width, startPos, targetPos) {
  const initialGrid = [];
  for (let row = 0; row < height; row++) {
    initialGrid.push([]);
    for (let col = 0; col < width; col++) {
      initialGrid[row].push({
        type: "unvisited",
        row: row,
        col: col,
      });
    }
  }

  initialGrid[startPos.row][startPos.col].type = "start";
  initialGrid[targetPos.row][targetPos.col].type = "target";

  return initialGrid;
}

export function resetVisitedCells(grid) {
  return grid.map((row) =>
    row.map((gridCell) =>
      gridCell.type === "visited"
        ? { ...gridCell, type: "unvisited" }
        : gridCell
    )
  );
}

export function deepCopyGrid(grid) {
  return grid.map((row) =>
    row.map((gridCell) => {
      return { ...gridCell };
    })
  );
}
