import React from 'react';
import { Link } from 'react-router-dom';

 
const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <body>
            <header class="splashPage">
                <div class="splahsPageTop">
                    <img src={window.logoURL} alt="FauxFlix Logo" className="logo"/>
                    <a href="#" class="btn btn-rounded"></a>
                </div>
                <div class="splashPageContent">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <a href="#" className="btn brn-xl">
                        Demo Login <i className="fas fa-chevron-right btn-icon"></i>
                    </a>
                    <img src={window.backgroundURL} alt="Background Image" className="background"/>
                </div>
                <Link to="/login">Sign In</Link>
                <Link to="/signup">Get Started</Link>
            </header>
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
