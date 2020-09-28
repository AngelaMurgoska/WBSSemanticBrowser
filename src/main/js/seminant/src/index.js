import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import QueryDetailsPage from "./views/QueryDetailsPage/QueryDetailsPage"
import LogInPage from "./views/LogInPage/LogInPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import EndpointPage from "./views/EndpointPage/EndpointPage";
import ResetPasswordPage from "./views/ResetPasswordPage/ResetPasswordPage";
import QueryPage from "./views/QueryPage/QueryPage";
import AddNewQueryPage from "./views/AddNewQueryPage/AddNewQueryPage";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/"  component={HomePage}/>
            <Route exact path="/queryDetails/:queryId" component={QueryDetailsPage}/>
            <Route exact path="/endpoints" component={EndpointPage}/>
            <Route exact path="/queries" component={QueryPage}/>
            <Route exact path="/addQuery" component={AddNewQueryPage}/>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/resetPassword" component={ResetPasswordPage}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);



