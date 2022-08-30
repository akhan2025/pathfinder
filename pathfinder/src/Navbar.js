import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';


function PathfindNavbar() {
  return (
    <>
    {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
      <Navbar key={expand} bg="" expand={expand} className="mb-3" fixed='top'>
        <Container fluid>
          <Navbar.Brand href="#">DBG Routing Visualization</Navbar.Brand>
          
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Options
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Meet The Team</Nav.Link>
                <NavDropdown
                  title="Algorithms"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action1">Breadth First Search (BFS)</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Depth First Search (DFS)</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Djikstra's Algorithm</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">A* Search</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
);
}
export default PathfindNavbar;