import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import QueryPage from "./views/QueryPage/QueryPage"

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/"  component={HomePage}/>
            <Route exact path="/queryDetails/:queryId" component={QueryPage}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);



