import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import TitleSection from "../../components/TitleSection/TitleSection";
import SideMenu from "../../components/SideMenu/SideMenu";
import {Col, Row} from "react-bootstrap";
import ItemList from "../../components/ItemList/ItemList";

class HomePage extends Component {

    render() {
        return (
            <React.Fragment>
             <Menu/>
             <TitleSection/>
             <Row>
                 <div className={"col-3 ml-3 my-4"}>
                     <SideMenu/>
                 </div>
                 <div className={"col mr-3 ml-0 my-4"}>
                     <ItemList/>
                 </div>
             </Row>
            </React.Fragment>
        );
    }

}

export default HomePage;