//React
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
//Components
import SplashContainer from './splash/splash_container';
import Root from './root';
import configureStore from '../store/store';
import LoginContainer from './session_form/login_container';
import SignupContainerP1 from './session_form/signup_form_p1_container';
import SignupContainer from './session_form/signup_form_container';
import HomepageContainer from './videos/homepage_container';
import VideoContainer from './videos/video_container';
import ListContainer from './list/list_container';
// import stylesheet from '../../app/assets/stylesheets/main_stylesheet.css'    //Do I even need this?
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <main className="entireApp">
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup1" component={SignupContainerP1} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <ProtectedRoute path="/browse" component={HomepageContainer} />
            <ProtectedRoute path="/browse/list" component={ListContainer} />
            <ProtectedRoute path="/videos/:id" component={VideoContainer} />
        </Switch>
    </main>

    
);
export default App;
