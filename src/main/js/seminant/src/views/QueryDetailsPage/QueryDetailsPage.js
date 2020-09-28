import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import {Jumbotron, Row} from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";
import QueryDetails from "../../components/QueryDetails/QueryDetails";
import Footer from "../../components/Footer/Footer";
//TODO check customJumbotron import

class QueryDetailsPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Jumbotron className={"mx-3 my-1 p-3 customJumbotron card-body"}>
                    <h1>Query Details</h1>
                </Jumbotron>
                <Row>
                    <div className={"col-3 ml-3 my-4"}>
                        <SideMenu/>
                    </div>
                    <div className={"col mr-3 ml-0 my-4"}>
                        <QueryDetails queryId={this.props.match.params.queryId}/>
                    </div>
                </Row>
                <Footer/>
            </React.Fragment>
        );
    }

}

export default QueryDetailsPage;