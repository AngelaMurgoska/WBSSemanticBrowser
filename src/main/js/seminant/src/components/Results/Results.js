import React, {Component} from "react";
import SeminantService from "../../service/axiosSeminantService";
import {ListGroup, Table} from "react-bootstrap";
import {unstable_renderSubtreeIntoContainer} from "react-dom";
import UserInfoService from "../../service/userInfoService";

class Results extends Component{

    constructor(props,context) {
        super(props, context);
        this.state = {
            results: [],
            predicates: [],
            rowNumbers: 0
        };
    }

    componentDidMount() {
        if (this.props.publicAccess) {
            SeminantService.fetchAllPublicQueryResults(this.props.queryId).then((response) => {
                this.setState((prevState)=>{
                    let results = {...prevState.results};
                    results = response.data;
                    return {results};
                });
            }).catch((error) => {
                console.log(error.response);
            });
            SeminantService.fetchPublicQueryResultPredicates(this.props.queryId).then((response) => {
                this.setState((prevState)=>{
                    let predicates = {...prevState.predicates};
                    predicates = response.data;
                    return {predicates};
                });
            }).catch((error) => {
                console.log(error.response);
            })
        } else {
            const authorization = UserInfoService.getLoggedInUserAuthorizationToken()
            SeminantService.fetchQueryResults(this.props.queryId, authorization).then((response) => {
                this.setState((prevState)=>{
                    let results = {...prevState.results};
                    results = response.data;
                    return {results};
                });
            }).catch((error) => {
                console.log(error.response);
            });
            SeminantService.fetchQueryResultPredicates(this.props.queryId, authorization).then((response) => {
                this.setState((prevState)=>{
                    let predicates = {...prevState.predicates};
                    predicates = response.data;
                    return {predicates};
                });
            }).catch((error) => {
                console.log(error.response);
            })
        }
    }

    calculateResults() {
        const numRows = Math.max.apply(Math, this.state.results.map((result) => { return result.rowNo; }))
        const rows = Array.from({length: numRows}, (_, i) => i + 1)
        let resultRows = rows.map((row) => {
           return (
               <tr>
                   {this.state.predicates.map(predicate => {
                       return this.state.results.filter(result => result.rowNo == row && result.predicate == predicate).map(rowResult => (
                                   <td>{rowResult.object}</td>
                               ))
                   })}
               </tr>
           )
        })
        return resultRows
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    {this.state.predicates.map(predicate => (
                            <th>{predicate}</th>
                        ))}
                </tr>
                </thead>
                <tbody>
                {this.calculateResults()}
                </tbody>
            </Table>
        );
    }

}
export default Results;
