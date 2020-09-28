import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import {Row} from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";
import NewQueryForm from "../../components/NewQueryForm/NewQueryForm";
import Footer from "../../components/Footer/Footer";


class AddNewQueryPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Row>
                    <div className={"col-3 ml-3 my-4"}>
                        <SideMenu/>
                    </div>
                    <div className={"col mr-3 ml-0 my-4"}>
                        <NewQueryForm/>
                    </div>
                </Row>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default AddNewQueryPage;