import { useEffect, useState, useRef, useCallback } from "react";

/**
 * This updates all cells on the grid in the order they are visited 
 * 
 * @param {*} setGridState the function used to update the values of the Grid State
 * @param {*} updateCell function used to update cell
 * @returns 
 */
function useUpdateGridCellsSequentially(setGridState, updateCell) {
  const [cellsIndex, setCellsIndex] = useState(null);   // Initialize the index of current cell in list of cells to null
  const cellsRef = useRef([]);                          // Cellref is initially empty but will be filled with visited cells later. See line 35
  const updateCellRef = useRef(updateCell);             // We can update any cell with our function using updateCellref 

  useEffect(() => {                                     // This function is called whenever setGridState or cellsIndex are updated
    const cells = cellsRef.current;                     
    if (cells.length === 0 || cellsIndex === null) {    // If there are no cells to update, return
      return;
    }
    if (cellsIndex === cells.length) {                  // If the index has run through all cells needed to be updated, reset states
      cellsRef.current = [];
      setCellsIndex(null);
      return;
    }
    setGridState((prevGrid) => {                        // Update cell currently in the cells[cellsIndex] to visited. This line will also cause the useEffect function to run again
      let row = cells[cellsIndex].row;
      let col = cells[cellsIndex].col;
      let cell = prevGrid[row][col];
      updateCellRef.current(cell);
      return [...prevGrid];
    });
    setCellsIndex(cellsIndex + 1);
  }, [setGridState, cellsIndex]);

  const setGridCellsToUpdate = useCallback((cells) => {             // stores a list of cells in cellsRed and sets CellsIndex as 0 to begin useEffect()
    if (cells === null || cells.length === 0) {
      return;
    }
    cellsRef.current = cells;
    setCellsIndex(0);
  }, []);

  const areGridCellsUpdating = cellsIndex !== null;

  return [areGridCellsUpdating, setGridCellsToUpdate];                         // We can call this method anywhere and now update any algorithm sequentially
}

export default useUpdateGridCellsSequentially;
