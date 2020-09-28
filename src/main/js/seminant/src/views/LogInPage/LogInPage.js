import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import LogInForm from "../../components/LogInForm/LogInForm";
import Footer from "../../components/Footer/Footer";

class LogInPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu/>
                <LogInForm/>
                <Footer/>
            </React.Fragment>
        );
    }

}

export default LogInPage;