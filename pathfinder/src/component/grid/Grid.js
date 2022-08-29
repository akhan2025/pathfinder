import React from "react";

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Grid extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <div className="Grid" style={{ width: WIDTH, height: HEIGHT }}>
          {" "}
        </div>{" "}
      </div>
    );
  }
}

export default Grid;
