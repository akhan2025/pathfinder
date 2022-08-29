import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PathfindNavbar from "./Navbar";
import HomeCard from "./StartCard";
import Gridboard from "./component/grid/Grid";

function App() {
  const title = "Pathfinding Visualization";

  return (
    <div className="App">
      <PathfindNavbar />
      <Container fluid /* Put the grid inside here to the right of homecard */>
        <Row>
          <Col>
            <HomeCard title={title} />
          </Col>
          <Col >
            <Gridboard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
