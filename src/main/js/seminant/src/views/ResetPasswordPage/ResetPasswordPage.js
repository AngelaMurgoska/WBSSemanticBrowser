import React, {Component} from "react";
import Menu from "../../components/Menu/Menu";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import Footer from "../../components/Footer/Footer";

class ResetPasswordPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu/>
                <ResetPasswordForm/>
                <Footer/>
            </React.Fragment>
        );
    }

}

export default ResetPasswordPage;