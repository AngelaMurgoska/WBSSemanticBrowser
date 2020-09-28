import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import {Jumbotron, Row} from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";
import EndpointList from "../../components/EndpointList/EndpointList";
import Footer from "../../components/Footer/Footer";

;

class EndpointPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Jumbotron className={"mx-3 my-1 p-3 customJumbotron card-body"}>
                    <h1>Endpoints</h1>
                </Jumbotron>
                <Row>
                    <div className={"col-3 ml-3 my-4"}>
                        <SideMenu/>
                    </div>
                    <div className={"col mr-3 ml-0 my-4"}>
                        <EndpointList/>
                    </div>
                </Row>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default EndpointPage