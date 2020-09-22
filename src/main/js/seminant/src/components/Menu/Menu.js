import React from 'react';
import {Nav, NavbarBrand} from "react-bootstrap";

const Menu = ()=> {

    return(
        <Nav className={"navbar fixed-top navbar-light bg-light"}>
            <NavbarBrand>
                <span className={"ml-2"}><a className={"text-decoration-none"}
                                            href={"/"}>Seminant</a></span>
            </NavbarBrand>
            <Nav.Item>
                <span className={"mx-4"}><a className={"menu-link text-decoration-none"} href="#">Log In</a></span>
                <span className={"mx-4"}><a className={"menu-link text-decoration-none"} href="#">Register</a></span>
            </Nav.Item>
        </Nav>
    )
}

export default Menu;