import React, {Component} from "react";
import {Col, Row, Form, Button} from "react-bootstrap";
import SeminantService from "../../service/axiosSeminantService";
import UserInfoService from "../../service/userInfoService";
import {Redirect} from "react-router-dom";
import Results from "../Results/Results";


class LogInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            isAuthenticated: false,
            emailControlShouldAppear: false,
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    login = () => {
        SeminantService.loginUser(this.state.username, this.state.password).then((response) => {
            UserInfoService.setLoggedInUserCredentials(this.state.username, response.data)
            this.setState({isAuthenticated: true});
        }).catch((error) => {
            console.log(error.response)
            alert('Login unsuccessful, wrong credentials')
        })
    };

    //TODO form validation
    sendResetPasswordLink  = () => {
        SeminantService.requestPasswordReset(this.state.email).then((response) => {
            alert("An email has been sent to your inbox");
        }).catch((error) => {
            alert("No user with that email in the system")
        })
    }

    enableEmailControl = () => {
        this.setState({emailControlShouldAppear: true});
    }


    render() {
        if (this.state.isAuthenticated === true) {
            return <Redirect to={'/'} />
        }
        return (
            <div>
                <h4 className="text-center pt-5">Log in</h4>
                <div className="container mt-4">
                    <Row className = {"justify-content-center align-items-center"}>
                        <Col md={6}>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="text" name="username" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                                    <br/>
                                    <small onClick={this.enableEmailControl}><a href={"#"}>Forgot password</a></small>
                                </Form.Group>
                                {this.state.emailControlShouldAppear &&  <Form.Group>
                                    <Form.Label>Enter your email to get a reset link</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="email" name="email" placeholder="Enter email address" />
                                </Form.Group>}
                                <Row>
                                    <Col>
                                        <Button onClick={this.login} variant="primary" type="submit">
                                            Log In
                                        </Button>
                                    </Col>
                                    {this.state.emailControlShouldAppear &&   <Col className={"text-right"}>
                                        <Button onClick={this.sendResetPasswordLink} variant="success" type="submit">
                                            Send Reset Link
                                        </Button>
                                    </Col>}
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}

export default LogInForm;