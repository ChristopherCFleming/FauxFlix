import React from 'react';
import { Link } from 'react-router-dom';
// import { receiveCurrentUser } from '../../actions/session_actions';
import { logout } from '../../actions/session_actions';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.endSession = this.endSession.bind(this)
        // this.logout = this.logout.bind(this)
    }


    endSession(e) {
        e.preventDefault();
        this.logout();
    }

    render() {
        // if (!window.currentUser) { //what I want to say here is if not logged in, do this, else do the other thing.
            // return (
            //     <header className="pageHeader">
            //         <Link to="/"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
            //         <Link  id="login" className="btn" to="/login">Sign In</Link>
            //     </header>
            // )
        // } else {
            return (
                <header className="pageHeader">
                    <Link to="/browse"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <div classname="subNavi">
                        <Link to="/browse">Home</Link>
                        <Link to="/myList">My List</Link>
                    </div>
                    <Link to="/" onClick={this.endSession}><img className="profilePic" src={window.profile_pic} alt="Profile Pic" /></Link>
                    {/* <Link to="/URL FOR LIST HERE!!!!">My List</Link> */}
                </header>
            )
        // }

    }
}

export default Header;