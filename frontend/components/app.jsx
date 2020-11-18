//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import GreetingContainer from './greeting/greeting_container';
import Root from './root';
import configureStore from '../store/store';
import LoginContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <h1>Faux Flix</h1>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);
export default App;
