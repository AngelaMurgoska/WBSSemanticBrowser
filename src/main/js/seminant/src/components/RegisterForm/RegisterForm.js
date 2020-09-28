import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";
import SeminantService from "../../service/axiosSeminantService";
import UserInfoService from "../../service/userInfoService";

const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            isRegistered: false,
            errors:{
                username: '',
                password: '',
                email: ''
            }
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    validateForm = () => {
        let errorsObj = this.state.errors;
        errorsObj.username = this.state.username.length < 4 ? 'Username must be longer than 5 characters' : ''
        errorsObj.email = validEmailRegex.test(this.state.email) ? '' : 'Email is not valid'
        errorsObj.password = this.state.password.length < 8 ? 'Password must be longer than 8 characters' : ''
        this.setState({errors: errorsObj})
    }

    register = () => {
        this.validateForm();
        if (this.state.errors.username=='' && this.state.errors.email=='' && this.state.errors.password=='') {
            SeminantService.registerUser(this.state.email, this.state.username, this.state.password).then((response) => {
                UserInfoService.setLoggedInUserCredentials(this.state.username, response.data.resetToken)
                this.setState({isRegistered: true});
            }).catch((error) => {
                console.log(error.response)
            })
        }
    };

    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to={'/'} />
        }
        return (
            <div>
                <h4 className="text-center pt-5">Register</h4>
                <div className="container mt-4">
                    <Row className = {"justify-content-center align-items-center"}>
                        <Col md={6}>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
                                    {this.state.errors.email.length > 0 &&
                                    <span className='error text-danger'>{this.state.errors.email}</span>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="text" name="username" placeholder="Enter username" />
                                    {this.state.errors.username.length > 0 &&
                                    <span className='error text-danger'>{this.state.errors.username}</span>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                                    {this.state.errors.password.length > 0 &&
                                    <span className='error text-danger'>{this.state.errors.password}</span>}
                                </Form.Group>
                                <Button onClick={this.register} variant="primary" type="submit">
                                    Register
                                </Button>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}

export default RegisterForm;