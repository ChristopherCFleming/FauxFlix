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
            <h1>Faux Flix</h1>
            <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);
export default App;
