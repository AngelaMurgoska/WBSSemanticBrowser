import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import {Row} from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";
import QueryDetails from "../../components/QueryDetails/QueryDetails";

class QueryPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Row>
                    <div className={"col-3 ml-3 my-4"}>
                        <SideMenu/>
                    </div>
                    <div className={"col mr-3 ml-0 my-4"}>
                        <QueryDetails queryId={this.props.match.params.queryId}/>
                    </div>
                </Row>
            </React.Fragment>
        );
    }

}

export default QueryPage;