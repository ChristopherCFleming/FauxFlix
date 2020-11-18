//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './root';
import configureStore from '../store/store';


const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Faux Flix</h1>
            </Link>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={SearchContainer} />
        </Switch>
    </div>
);

export default App;