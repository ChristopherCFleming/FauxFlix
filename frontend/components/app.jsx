//React
import React from 'react';
import { Switch } from 'react-router-dom';
//Components
import SplashContainer from './splash/splash_container';
import LoginContainer from './login/login_container';
import SignupContainerP1 from './signup/signup_form_p1_container';
import SignupContainer from './signup/signup_form_container';
import HomepageContainer from './homepage/homepage_container';
import VideoContainer from './videos/video_container';
import ListContainer from './list/list_container';
import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <main className="entireApp">
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup1" component={SignupContainerP1} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <ProtectedRoute path="/browse" component={HomepageContainer} />
            <ProtectedRoute path="/list" component={ListContainer} />
            <ProtectedRoute path="/videos/:id" component={VideoContainer} />
            <ProtectedRoute path="/search" component={SearchContainer} />
        </Switch>
        
    </main>

    
);
export default App;
