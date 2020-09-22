import React from 'react';
import {Button, Jumbotron, Nav, NavbarBrand} from "react-bootstrap";
import "./TitleSection.css"

const TitleSection = ()=> {

    return(
        <Jumbotron className={"mx-3 my-1 p-3 customJumbotron card-body"}>
            <h1>Seminant - Semantic Browser</h1>
            <p>
                A browser which lets you use SPARQL to query whichever endpoint you like.
            </p>
        </Jumbotron>
    )
}

export default TitleSection;