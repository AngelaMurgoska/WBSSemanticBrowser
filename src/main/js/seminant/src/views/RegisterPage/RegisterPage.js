import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Footer from "../../components/Footer/Footer";

class RegisterPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu/>
                <RegisterForm/>
                <Footer/>
            </React.Fragment>
        );
    }

}

export default RegisterPage;