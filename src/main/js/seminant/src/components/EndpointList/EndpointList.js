import React, {Component} from "react";
import SeminantService from "../../service/axiosSeminantService";
import {Button, Card, Col, Form, ListGroup, Row} from "react-bootstrap";
import UserInfoService from "../../service/userInfoService";
import {Redirect} from "react-router-dom";

class EndpointList extends Component{

    constructor(props,context) {
        super(props, context);
        this.state = {
            endpoints: [],
            endpointFormShouldAppear: false,
            name: '',
            url: '',
            errors:{
                name: '',
                url: ''
            }
        }
    }
    componentDidMount() {
        SeminantService.fetchAllEndpoints().then((response) => {
            this.setState({endpoints: response.data});
        }).catch((error) => {
            console.log(error.response)
        });
    }

    showEndpointForm(e) {
        e.preventDefault();
        this.setState({endpointFormShouldAppear: true})
    }

    validateForm = () => {
        let errorsObj = this.state.errors;
        errorsObj.name = this.state.name.length < 3 ? 'Username must be longer than 2 characters' : ''
        errorsObj.url = this.state.url.length < 7 ? 'Url is not valid' : ''
        this.setState({errors: errorsObj})
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    addEndpoint = () => {
        this.validateForm();
        if (this.state.errors.name == '' && this.state.errors.url == '') {
            const authToken = UserInfoService.getLoggedInUserAuthorizationToken();
            SeminantService.addEndpoint(this.state.name, this.state.url, authToken).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error.response)
            })
            window.location.reload();
        }
    }

    deleteEndpoint = (e) => {
        const authToken = UserInfoService.getLoggedInUserAuthorizationToken();
        SeminantService.deleteEndpoint(e.target.name, authToken).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.response)
        })
        window.location.reload();
    }

    //TODO set columns to auto where needed
    render() {
        return (
            <Card>
                <Card.Header className={"text-right"}><Button onClick={(e) => this.showEndpointForm(e)} variant="success">Add New Endpoint</Button></Card.Header>
                {this.state.endpointFormShouldAppear &&
                <React.Fragment>
                <Card.Body>
                    <Card.Title>Add a new Endpoint</Card.Title>
                        <Form.Group>
                            <Form.Label>Endpoint Name</Form.Label>
                            <Form.Control onChange={this.handleChange} name="name" className={"w-50"} type="text" placeholder="Enter name" />
                            {this.state.errors.name.length > 0 &&
                            <span className='error text-danger'>{this.state.errors.name}</span>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Endpoint url</Form.Label>
                            <Form.Control onChange={this.handleChange} name="url" className={"w-50"} type="url" placeholder="Enter url" />
                            {this.state.errors.url.length > 0 &&
                            <span className='error text-danger'>{this.state.errors.url}</span>}
                        </Form.Group>
                        <Button onClick={this.addEndpoint} variant="success" type="submit">
                            Add Endpoint
                        </Button>
                </Card.Body>
                <hr/></React.Fragment>}
                <Card.Body>
                    <Card.Title>Endpoint List</Card.Title>
                    <ListGroup>
                        {this.state.endpoints.map(endpoint => (
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        {endpoint.name}
                                        <br/>
                                        <a href={endpoint.url}>{endpoint.url}</a>
                                    </Col>
                                    <Col className={"text-right"}>
                                        <Button name={endpoint.endpointId} variant="danger" onClick={(e) => this.deleteEndpoint(e)}>Delete</Button>
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

export default EndpointList;