import { useEffect, useState, useRef } from "react";

function useUpdateGridCellsSequentially(setGridState, updateCell) {
  const [cellsIndex, setCellsIndex] = useState(null);
  const cellsRef = useRef([]);
  const updateCellRef = useRef(updateCell);

  useEffect(() => {
    const cells = cellsRef.current;
    if (cells.length === 0 || cellsIndex === null) {
      return;
    }
    if (cellsIndex === cells.length) {
      cellsRef.current = [];
      setCellsIndex(null);
      return;
    }
    setGridState((prevGrid) => {
      let row = cells[cellsIndex].row;
      let col = cells[cellsIndex].col;
      let cell = prevGrid[row][col];
      updateCellRef.current(cell);
      return [...prevGrid];
    });
    setCellsIndex(cellsIndex + 1);
  }, [setGridState, cellsIndex]);

  const setGridCellsToUpdate = (cells) => {
    cellsRef.current = cells;
    setCellsIndex(0);
  };

  return setGridCellsToUpdate;
}

export default useUpdateGridCellsSequentially;
