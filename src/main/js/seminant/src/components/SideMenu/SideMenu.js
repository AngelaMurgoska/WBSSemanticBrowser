import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import UserInfoService from "../../service/userInfoService";
import { useHistory } from 'react-router';

const SideMenu = ()=> {

    const history = useHistory();

    const goToEndpoints = (e) => {
        e.preventDefault();
        if (UserInfoService.checkIfUserLoggedIn()) {
            history.push('/endpoints')
        } else {
            history.push('/login')
        }
    }

    const goToQueries= (e) => {
        e.preventDefault();
        if (UserInfoService.checkIfUserLoggedIn()) {
            history.push('/queries')
        } else {
            history.push('/login')
        }
    }

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Explore</Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item><span onClick={(e) =>goToEndpoints(e)}><a href={"#"}>Endpoints</a></span></ListGroup.Item>
                        <ListGroup.Item><span onClick={(e) =>goToQueries(e)}><a href={"#"}>My Queries</a></span></ListGroup.Item>
                    </ListGroup>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SideMenu;