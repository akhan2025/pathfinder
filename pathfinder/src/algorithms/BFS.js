import Queue from "./Queue";

/**
 * Runs Breadth-First Search on the grid and stores all cells visited until it finds the target
 * 
 * @param {[][]} grid 
 * @param {number} S_ROW 
 * @param {number} S_COL 
 * @returns {[]} visitedcells
 */
function BFS(grid, S_ROW, S_COL) {

  let copy_grid = grid.map((row) =>    		// Create a copy of grid so we don't change the component directly                              
    row.map((gridCell) => {
      return { ...gridCell };
    })
  );

  const queue = new Queue();              //Initialize queue and push starting cell onto it
  console.log("created queue");
  queue.enqueue(copy_grid[S_ROW][S_COL]);
  console.log("enqueued start");

  let visitedcells = [];

  while (!queue.isEmpty) {								//Search adjacent neighbors until target is found
    let cell = queue.dequeue();

    if (cell.type === "unvisited") {
      cell.type = "visited";
      visitedcells.push(cell);
    } else if (cell.type === "target") {
      console.log("target found!");
      break;
    } else if (cell.type === "visited") {
      continue;
    }

    let row = cell.row;
    let col = cell.col;

    if (row - 1 >= 0 && copy_grid[row - 1][col].type !== "visited") {
      queue.enqueue(copy_grid[row - 1][col]);
    }
    if (
      row + 1 < copy_grid.length &&
      copy_grid[row + 1][col].type !== "visited"
    ) {
      queue.enqueue(copy_grid[row + 1][col]);
    }
    if (col - 1 >= 0 && copy_grid[row][col - 1].type !== "visited") {
      queue.enqueue(copy_grid[row][col - 1]);
    }
    if (
      col + 1 < copy_grid[0].length &&
      copy_grid[row][col + 1].type !== "visited"
    ) {
      queue.enqueue(copy_grid[row][col + 1]);
    }
  }

  return visitedcells;
}

export default BFS;
