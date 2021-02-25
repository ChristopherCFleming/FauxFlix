import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navi(props) {

    const [background, setBackground] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackground(true);
            } else {
                setBackground(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    function endSession() {
        props.logout();
    }


    if (!props.currentUser) {
        return (
                <header className="pageHeader">
                    <Link to="/"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <Link  id="login" className="btn" to="/login">Sign In</Link>
                </header>
            )
    } else {
        return (
            <header className={`pageHeader loggedIn ${background ? "active" : ""}`}>
                <div className="firstSection">
                    <Link to="/browse"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <div className="subNavi">
                        <Link to="/browse" className="headerLink">Home </Link>
                        <Link to="/myList" className="headerLink">My List </Link>
                    </div>
                </div>
                <Link to="/" onClick={endSession}><img className="profilePic" src={window.profile_pic} alt="Profile Pic" /></Link>
            </header>
        )
    }
}

export default Navi;