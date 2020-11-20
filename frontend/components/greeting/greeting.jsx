import React from 'react';
import { Link } from 'react-router-dom';

 //copied this part.....
const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <img src={window.logoURL} alt="FauxFlix Logo" />
            
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Get Started</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.email}!</h2>
            
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
