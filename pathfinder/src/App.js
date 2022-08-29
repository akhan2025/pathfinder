import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PathfindNavbar from "./Navbar";
import HomeCard from "./StartCard";
import Grid from "./component/grid/Grid";

function App() {
  const title = "Pathfinding Visualization";

  return (
    <div className="App">
      <PathfindNavbar />
      <Container fluid /* Put the grid inside here to the right of homecard */>
        <HomeCard title={title} />
        <Grid />
      </Container>
    </div>
  );
}

export default App;
