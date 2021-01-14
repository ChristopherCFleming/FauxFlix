import React from 'react';
import { Link } from 'react-router-dom';

 
const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <body>
            <header className="splashPage">
                <div className="splashPageTop">
                    <img src={window.logoURL} alt="FauxFlix Logo" className="logo"/>
                    {/* <a href="#" className="btn btn-rounded">sign in</a> */}
                    <Link  id="login" className="btn" to="/login">Sign In</Link>
                </div>
                <div className="splashPageContent">
                    <h1>Unlimited movies, TV <br/> shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <Link to="/signup" id="createAccount" className="btn">Get Started<i className="fas fa-chevron-right btn-icon"></i></Link>
                    <a href="#" id="demoLogin" className="btn">
                        Demo Login
                    </a>
                </div>
                <div className="firstSubsectionContainer subsection">
                    <img src={window.tvURL} alt="TV" className="TV"/>
                </div>
                <div className="secondSubsectionContainer subsection">
                    <img src={window.handheldURL} alt="handheld" className="handheld"/>
                </div>
                <div className="thirdSubsectionContainer subsection">
                    <img src={window.allDevicesURL} alt="allDevices" className="allDevices"/>
                </div>
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
