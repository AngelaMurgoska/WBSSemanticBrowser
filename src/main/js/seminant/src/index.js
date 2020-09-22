import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/"  component={HomePage}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);



