import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function HomeCard({ title }) {
    return (
        <Card style={{ width: '30rem', height: window.innerHeight }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Text variant='no-wrap'/* will clean up later */>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <DropdownButton id="dropdown-basic-button" title="Algorithms" variant='info'>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </Card.Body>

            <Button variant="info">Visualize</Button>
        </Card>);
}

export default HomeCard;