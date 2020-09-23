import React from "react";
import {Button, Form, ListGroup} from "react-bootstrap";
import SeminantService from "../../service/axiosSeminantService";


const QueryForm = (props)=> {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    //TODO delete controlIds
    return(
        <Form  onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formqueryName">
                <Form.Label>Query Name</Form.Label>
                <br/>
                <Form.Label>{props.query.name}</Form.Label>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea2">
                <Form.Label>Created by</Form.Label>
                <br/>
                <Form.Label>{props.user.username}</Form.Label>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea3">
                <Form.Label>Endpoint</Form.Label>
                <br/>
                <Form.Label>{props.endpoint.name}</Form.Label>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Query Text</Form.Label>
            <Form.Control as="textarea" rows="10" value = {props.query.text}/>
            </Form.Group>
            <Button variant="success" type="submit">
                Execute
            </Button>
        </Form>
    )
}

export default QueryForm;