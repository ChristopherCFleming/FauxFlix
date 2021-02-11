import React from 'react';
import { Link } from 'react-router-dom';
// import { receiveCurrentUser } from '../../actions/session_actions';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // if (!window.currentUser) { //what I want to say here is if not logged in, do this, else do the other thing.
            return (
                <header className="pageHeader">
                    <Link to="/"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <Link  id="login" className="btn" to="/login">Sign In</Link>
                </header>
            )
        // } else {
            // return (
            //     <header className="pageHeader">
            //         <Link to="/"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
            //         <button onClick={this.props.logout} className="btn">Log Out</button>
            //         <button onClick={this.props.logout2} className="btn">Log Out 2</button>
            //     </header>
            // )
        // }

    }
}

export default Header;