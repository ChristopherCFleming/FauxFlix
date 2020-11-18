//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import GreetingContainer from './greeting/greeting_container';
import Root from './root';
import configureStore from '../store/store';
import LoginFormContainer from './session_form/session_form';
import SignupFormContainer from './session_form/session_form';


const App = () => (
    <div>
        <header>
            <h1>Faux Flix</h1>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);
export default App;
