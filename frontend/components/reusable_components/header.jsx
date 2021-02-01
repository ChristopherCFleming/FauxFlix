import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="splashPageHeader">
            <img src={window.logoURL} alt="FauxFlix Logo" className="logo"/>
            <Link  id="login" className="btn" to="/login">Sign In</Link>
        </header>
    )
}

export default Header;