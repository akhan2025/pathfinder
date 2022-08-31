import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PathfindNavbar from "./Navbar";
import HomeCard from "./StartCard";
import GridBoard from "./component/grid/Grid";

function App() {
  const title = "Pathfinding Visualization";

  return (
    <div className="App">
      <GridBoard />
    </div>
  );
}

export default App;
