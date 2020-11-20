//React
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
//Components
import GreetingContainer from './greeting/greeting_container';
import Root from './root';
import configureStore from '../store/store';
import LoginContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <link rel="stylesheet" href="../../app/assets/stylesheets/main_stylesheet.css" type="text/css" />
            <h1>FauxFlix - Watch TV Shows Online, Watch Movies Online</h1>
            <img src={window.backgroundURL} alt="Background Image" className="background"/>
            <GreetingContainer />

        </header>
        <p className="testing">Testing</p>


        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <h1></h1>
    </div>
);
export default App;
