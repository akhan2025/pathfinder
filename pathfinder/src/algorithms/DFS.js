import { deepCopyGrid } from "../util/GridUtil";
import Queue from "./Queue";

function DFS(grid, S_ROW, S_COL) {
  grid = deepCopyGrid(grid);
  const queue = new Queue();
  console.log("created queue");
  queue.enqueue(grid[S_ROW][S_COL]);
  console.log("enqueued start");
  let passes = 0;
  let visitedcells = [];

  while (!queue.isEmpty) {
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
    
    if (row - 1 >= 0 && grid[row - 1][col].type !== "visited") {
      queue.enqueue(grid[row - 1][col]);
    } 

    else if (
        col + 1 < grid[0].length &&
        grid[row][col + 1].type !== "visited"
      ) {
        queue.enqueue(grid[row][col + 1]);
      }

    else if (
        row + 1 < grid.length &&
        grid[row + 1][col].type !== "visited"
      ) {
        queue.enqueue(grid[row + 1][col]);
      }

    else if (col - 1 >= 0 && grid[row][col - 1].type !== "visited") {
        queue.enqueue(grid[row][col - 1]);
      }
    
    passes++;
  }

  console.log(passes);
  return visitedcells;
}

export default DFS;