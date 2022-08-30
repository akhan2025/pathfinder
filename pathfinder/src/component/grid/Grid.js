import "./Grid.css";

const CELL_SIZE = 20;
const WIDTH = 1000;
const HEIGHT = 800;

function GridBoard(){
    return (
      <div>
        {" "}
        <div
          className="Grid"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
        >
          {" "}
        </div>{" "}
      </div>
    );
  }

export default GridBoard;