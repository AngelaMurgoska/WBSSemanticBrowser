import React from "react";
import {Card, ListGroup} from "react-bootstrap";

const SideMenu = ()=> {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Explore</Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item>Endpoints</ListGroup.Item>
                        <ListGroup.Item>Queries</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SideMenu;