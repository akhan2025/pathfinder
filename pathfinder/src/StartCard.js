import Button from 'react-bootstrap/Button';
import "./StartCard.css";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HomeCard({ title }) {
    return (
        <div className='top-margin'>
        <Card style={{ width: '30rem', height:window.innerHeight - 500}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Row>
                        <Col >
                            <Card.Text className="text-left">
                                Pathfinding Algorithms look to find the shortest path between any two points.
                                Our goal with this visualizer is to showcase how many pathfinding algorithms accomplish
                                this task. Try it for yourself!
                            </Card.Text>
                        </Col>
                    </Row>
                    <DropdownButton id="dropdown-basic-button" title="Algorithms" variant='info'>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            <div className= "d-grid gap-0">
                <Button variant="outline-info"  size='lg'>Visualize</Button>
                <Button variant="outline-danger" size='lg'>Clear Board</Button>
                </div>
        
            
        </Card >
    </div>
    );
}

export default HomeCard;