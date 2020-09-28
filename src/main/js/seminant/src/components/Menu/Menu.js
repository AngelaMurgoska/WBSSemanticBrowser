import React from 'react';
import {Nav, NavbarBrand} from "react-bootstrap";
import { useHistory } from 'react-router';
import UserInfoService from "../../service/userInfoService";


const Menu = ()=> {

    const isLoggedIn = UserInfoService.checkIfUserLoggedIn();
    const history = useHistory();

    const logOut = (e) => {
        e.preventDefault();
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");
        history.push('/')
    }

    return(
        <Nav className={"navbar fixed-top navbar-light bg-light"}>
            <NavbarBrand>
                <span className={"ml-2"}><a className={"text-decoration-none"}
                                            href={"/"}>
                    <img src={require('../../assets/logo.png')} alt="" className={"d-inline-block align-top"} style={{width: "30px", height: "30px"}}/>
                    <span className={"ml-2"}>Seminant</span>
                </a></span>
            </NavbarBrand>
            <Nav.Item>
                {isLoggedIn
                    ? <span onClick={(e) => logOut(e)} className={"mx-4"}><a className={"menu-link text-decoration-none"} href="#">Log out</a></span>
                    : <React.Fragment><span  className={"mx-4"}><a className={"menu-link text-decoration-none"} href="/login">Log In</a></span>
                        <span className={"mx-4"}><a className={"menu-link text-decoration-none"}  href="/register">Register</a></span></React.Fragment>
                }
            </Nav.Item>
        </Nav>
    )
}

export default Menu;