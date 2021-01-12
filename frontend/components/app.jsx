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
import VideosContainer from './videos/video_container';
// import stylesheet from '../../app/assets/stylesheets/main_stylesheet.css'    //Do I even need this?
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="Entire App">
        <header>
            <h1>FauxFlix - Watch TV Shows Online, Watch Movies Online</h1>

        </header>
        

        <Switch>
            <AuthRoute exact path="/" component={GreetingContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <protectedRoute path="/videos" component={VideosContainer} />
            {/* <protectedRoute path="/videos/:id" component={VideosContainer} />  How to do wildcard here? */}
        </Switch>
    </div>
);
export default App;
