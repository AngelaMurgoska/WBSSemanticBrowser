import React, {Component} from "react";
import UserInfoService from "../../service/userInfoService";
import SeminantService from "../../service/axiosSeminantService";
import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";

class QueryList extends Component{

    constructor(props,context) {
        super(props, context);
        this.state = {
            queries: [],
            username: ''
        }
    }

    componentDidMount() {
        const authToken = UserInfoService.getLoggedInUserAuthorizationToken();
        SeminantService.fetchAllQueriesByUser(authToken).then((response) => {
            const username = UserInfoService.getLoggedInUserUsername();
            this.setState({username: username, queries: response.data})
        }).catch((error) => {
            console.log(error.response)
        })
    }

    deleteQuery = (e) => {
        const authToken = UserInfoService.getLoggedInUserAuthorizationToken();
        SeminantService.deleteQuery(e.target.name, authToken).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.response)
        })
        window.location.reload();
    }

    render() {
        return(
            <Card>
                <Card.Header className={"text-right"}><Button variant="success"><a style={{color: "white", textDecoration: "none"}} href={"/addQuery"}>Add New Query</a></Button></Card.Header>
                <Card.Body>
                    <Card.Title>List of queries by {this.state.username}</Card.Title>
                    <ListGroup>
                        {this.state.queries.map(query => (
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <a href={"/queryDetails/" + query.queryId}>{query.name}</a>
                                    </Col>
                                    <Col className={"text-right"}>
                                        <Button name={query.queryId} variant="danger" onClick={(e) => this.deleteQuery(e)}>Delete</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }

}

export default QueryList;