import React from 'react';
import { Link } from 'react-router-dom';

 
const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <body>
            
            <img src={window.logoURL} alt="FauxFlix Logo" className="logo"/>
            <img src={window.backgroundURL} alt="Background Image" className="background"/>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Get Started</Link>
        </body>
        
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
