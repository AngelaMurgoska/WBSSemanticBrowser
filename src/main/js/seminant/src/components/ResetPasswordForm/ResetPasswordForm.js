import React,{Component} from "react";
import Menu from "../Menu/Menu";
import {Button, Col, Form, Row} from "react-bootstrap";
import SeminantService from "../../service/axiosSeminantService";
import {Redirect} from "react-router-dom";

class ResetPasswordForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    resetPassword = () => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let resetToken = params.get('token')
        SeminantService.saveNewUserPassword(this.state.username, this.state.password, resetToken).then((response) => {
            alert("Your password has been changed, log in to continue");
        }).catch((error) => {
            alert("Something went wrong")
        })
    }

    render() {
        return (
            <div>
                <h4 className="text-center pt-5">Reset Password</h4>
                <div className="container mt-4">
                    <Row className = {"justify-content-center align-items-center"}>
                        <Col md={6}>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="email" name="username" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="password" name="password" placeholder="New password" />
                                </Form.Group>
                                <Button onClick={this.resetPassword} variant="success" type="submit">
                                    Reset Password
                                </Button>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ResetPasswordForm