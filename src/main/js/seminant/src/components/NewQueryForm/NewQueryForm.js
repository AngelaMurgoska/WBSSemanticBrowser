import React, {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import SeminantService from "../../service/axiosSeminantService";
import UserInfoService from "../../service/userInfoService";
import {Redirect, withRouter} from "react-router-dom";

class NewQueryForm extends Component {

    constructor(props,context) {
        super(props, context);
        this.state = {
            endpoints: [],
            endpointId: '',
            name: '',
            publicAccess: '',
            text: '',
            errors: {
                name: ''
            }
        }
    }

    componentDidMount() {
        SeminantService.fetchAllEndpoints().then((response) => {
            this.setState({endpoints: response.data, endpointId: response.data[0].endpointId})
        }).catch((error) => {
            console.log(error.response)
        })
    }

    validateForm = () => {
        let errorsObj = this.state.errors;
        errorsObj.name = this.state.name.length < 6 ? 'Query name must be longer than 5 characters' : ''
        this.setState({errors: errorsObj})
    }

    handleChange = (event) => {
        console.log(event.target.name + " " + event.target.value)
        this.setState({[event.target.name] : event.target.value});
    }

    handleCheckboxChange = (event) => {
        console.log(event.target.checked);
        this.setState({ publicAccess: event.target.checked });
    }

    addQuery = () => {
        this.validateForm();
        if (this.state.errors.name == ''){
            const authorization = UserInfoService.getLoggedInUserAuthorizationToken();
            const username = UserInfoService.getLoggedInUserUsername();
            SeminantService.addQuery(authorization, username, this.state.endpointId,
                this.state.name, this.state.publicAccess, this.state.text).then((response) => {
            }).catch((error) => {
                console.log(error.response)
            })
            this.props.history.push('/queries')
        }
    }

    render() {
        return(
            <Card className={"w-100"} >
                <Card.Body>
                    <Card.Text className={"mb-4"}>
                        <Card.Title>Add a new query</Card.Title>
                    </Card.Text>
                        <Form.Group>
                            <Form.Label>Query Name</Form.Label>
                            <Form.Control onChange={this.handleChange} name="name" type="text"/>
                            {this.state.errors.name.length > 0 &&
                            <span className='error text-danger'>{this.state.errors.name}</span>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Check onChange={this.handleCheckboxChange} name="publicAccess" type="checkbox" label="Public access" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Endpoint</Form.Label>
                            <Form.Control onChange={this.handleChange} name="endpointId" as="select">
                                {this.state.endpoints.map((endpoint) => (
                                    <option value={endpoint.endpointId}>
                                        {endpoint.name} - {endpoint.url}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Query Text</Form.Label>
                            <Form.Control onChange={this.handleChange} name="text" as="textarea" rows="10"/>
                        </Form.Group>
                        <Button onClick={this.addQuery} variant="success" type="submit">
                            Add Query
                        </Button>
                </Card.Body>
            </Card>
        )
    }

}

export default withRouter(NewQueryForm);