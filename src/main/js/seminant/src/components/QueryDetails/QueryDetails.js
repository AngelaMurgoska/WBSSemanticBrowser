import React, {Component} from "react";
import SeminantService from "../../service/axiosSeminantService";
import {Card} from "react-bootstrap";
import QueryForm from "../QueryForm/QueryForm";
import UserInfoService from "../../service/userInfoService";

class QueryDetails extends Component{

    constructor(props,context) {
        super(props, context);
        this.state = {
           query: {},
            user: {},
            endpoint:{}
        };
    }

    componentDidMount() {
        const queryId = this.props.queryId;
        SeminantService.fetchPublicQueryDetails(queryId).then((response) => {
            this.setState( {
                query:response.data,
                user: response.data.createdBy,
                endpoint: response.data.endpoint,
            });
        }).catch((error) => {
            const authorization = UserInfoService.getLoggedInUserAuthorizationToken();
            SeminantService.fetchQueryDetails(queryId, authorization).then((response) => {
                this.setState( {
                    query:response.data,
                    user: response.data.createdBy,
                    endpoint: response.data.endpoint,
                });
            }).catch((error) => {
                console.log(error.response)
            });
        });
    }

    render(){
        return(
            <Card className={"w-100"} >
                <Card.Body>
                    <Card.Text>
                        <Card.Title>Query Details</Card.Title>
                        <QueryForm query = {this.state.query} user = {this.state.user} endpoint = {this.state.endpoint}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default QueryDetails;