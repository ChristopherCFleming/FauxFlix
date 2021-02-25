import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navi(props) {

    function endSession() {
        props.logout();
    }

    // function doThing() {
    //     console.log("Actually clicked!")
    // }

    if (!props.currentUser) {
            return (
                <header className="pageHeader">
                    <Link to="/"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <Link  id="login" className="btn" to="/login">Sign In</Link>
                </header>
            )
        } else {
            return (
                <header className="pageHeader loggedIn">
                    <div className="firstSection">
                        <Link to="/browse"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                        <div className="subNavi">
                            <Link to="/browse" className="headerLink">Home </Link>
                            <Link to="/myList" className="headerLink">My List </Link>
                        </div>
                    </div>
                    
                    <Link to="/" onClick={endSession}><img className="profilePic" src={window.profile_pic} alt="Profile Pic" /></Link>
                    {/* <Link to="/URL FOR LIST HERE!!!!">My List</Link> */}
                </header>
            )
        }

}

export default Navi;