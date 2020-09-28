import React, {useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";
import SeminantService from "../../service/axiosSeminantService";
import Results from "../Results/Results";
import UserInfoService from "../../service/userInfoService";


const QueryForm = (props)=> {

    const [resultsPresent, setResultsPresent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.query.publicAccess) {
        SeminantService.executePublicQuery(props.query.queryId).then((response) => {
            setResultsPresent(true);
        }).catch((error) => {
            console.log(error.response);
        }) }
        else {
            const authorization = UserInfoService.getLoggedInUserAuthorizationToken();
            SeminantService.executeQuery(props.query.queryId, authorization).then((response) => {
                setResultsPresent(true);
            }).catch((error) => {
                console.log(error.response);
            })
        }
    }

    //TODO delete controlIds
    return(
        <React.Fragment>
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
            {
                props.query.lastRun && <Form.Group>
                    <Form.Label>Last Run</Form.Label>
                    <br/>
                    <Form.Label>{props.query.lastRun}</Form.Label>
                </Form.Group>
            }
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Query Text</Form.Label>
            <Form.Control as="textarea" rows="10" value = {props.query.text}/>
            </Form.Group>
            <Button variant="success" type="submit">
                Execute
            </Button>
        </Form>
            <br/>
            {resultsPresent && <Results queryId = {props.query.queryId} publicAccess = {props.query.publicAccess}/>}
        </React.Fragment>
    )
}

export default QueryForm;