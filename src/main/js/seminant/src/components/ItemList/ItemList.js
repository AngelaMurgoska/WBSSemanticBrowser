import React, {Component} from "react";
import {Card, ListGroup} from "react-bootstrap";
import SeminantService from "../../service/axiosSeminantService";

class ItemList extends Component{

    constructor(props,context) {
        super(props, context);
        this.state = {
            endpoints: [],
            queries: []
        };
    }

    componentDidMount() {
       SeminantService.fetchAllEndpoints().then((response) => {
           this.setState({endpoints: response.data});
       }).catch((error) => {
           console.log(error.response)
       });
       SeminantService.fetchAllPublicQueries().then((response) => {
           this.setState({queries: response.data});
       }).catch((error) => {
           console.log(error.response)
       })
    }

    render(){
        return(
            <Card className={"w-100"} >
                <Card.Body>
                    <Card.Text>
                        <Card.Title>Available Endpoints</Card.Title>
                        <ListGroup>
                            {this.state.endpoints.map(endpoint => (
                                <ListGroup.Item>{endpoint.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Text>
                    <Card.Text>
                        <Card.Title>Available Public Queries</Card.Title>
                        <ListGroup>
                            {this.state.queries.map(query => (
                                <a href={"/queryDetails/" + query.queryId}><ListGroup.Item>{query.name}</ListGroup.Item></a>
                            ))}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default ItemList;