import Queue from "./Queue";

function DFS(grid, S_ROW, S_COL) {
  let copy_grid = grid.map((row) =>
    row.map((gridCell) => {
      return { ...gridCell };
    })
  );
  const queue = new Queue();
  console.log("created queue");
  queue.enqueue(copy_grid[S_ROW][S_COL]);
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

    if (row - 1 >= 0 && copy_grid[row - 1][col].type !== "visited") {
      copy_grid[row - 1][col].previous = copy_grid[row][col];
      queue.enqueue(copy_grid[row - 1][col]);
    } else if (
      col + 1 < copy_grid[0].length &&
      copy_grid[row][col + 1].type !== "visited"
    ) {
      copy_grid[row][col + 1].previous = copy_grid[row][col];
      queue.enqueue(copy_grid[row][col + 1]);
    } else if (
      row + 1 < copy_grid.length &&
      copy_grid[row + 1][col].type !== "visited"
    ) {
      copy_grid[row + 1][col].previous = copy_grid[row][col];
      queue.enqueue(copy_grid[row + 1][col]);
    } else if (col - 1 >= 0 && copy_grid[row][col - 1].type !== "visited") {
      copy_grid[row][col + 1].previous = copy_grid[row][col];
      queue.enqueue(copy_grid[row][col - 1]);
    }

    passes++;
  }

  console.log(passes);
  return visitedcells;
}

export default DFS;
