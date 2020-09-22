import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import TitleSection from "../../components/TitleSection/TitleSection";

class HomePage extends Component {

    render() {
        return (
            <React.Fragment>
             <Menu/>
             <TitleSection/>
            </React.Fragment>
        );
    }

}

export default HomePage;