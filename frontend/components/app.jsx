//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import GreetingContainer from './greeting/greeting_container'
import Root from './root';
import configureStore from '../store/store';


const App = () => (
    <div>
        <header>
            <h1>Faux Flix</h1>
            <GreetingContainer />
        </header>
    </div>
);
export default App;
