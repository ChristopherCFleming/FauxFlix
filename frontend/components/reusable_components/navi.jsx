import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navi(props) {

    const [background, setBackground] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
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

    if (props.videoShow) {
        return (
            <div className="videoShowNaviContainer">
                <Link to="/browse">
                    <div className="naviElements">
                        <i className="fas fa-arrow-left"></i>
                        <p>Back to Browse</p>
                    </div>
                </Link>
            </div>
        )
    } else if (props.currentUser) {
        return (
            <header className={`pageHeader loggedIn ${background ? "active" : ""}`}>
                <div className="firstSection">
                    <Link to="/browse"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <div className="subNavi">
                        <Link to="/browse" className="headerLink">Home </Link>
                        <Link to="/myList" className="headerLink">My List </Link>
                    </div>
                </div>
                <div className="secondSection">
                    <img className="profilePic" src={window.profile_pic} alt="Profile Pic" />
                    <i class="fas fa-caret-down" id="downCaret"></i>
                    <ul className="profileDropdown">
                        <li className="dropdownItem">
                            <a href="https://christophercfleming.github.io/" target="_blank">Portfolio</a>
                        </li>
                        <li className="dropdownItem">
                            <a id="linkedin" href="https://www.linkedin.com/in/christophercfleming/" target="_blank">LinkedIn</a>
                        </li>
                        <li className="dropdownItem">
                            <a id="github" href="https://github.com/ChristopherCFleming" target="_blank">Github</a>
                        </li>
                        <li className="dropdownItem">
                            <a href="https://angel.co/u/christopher-c-fleming" style={{borderBottom: '1px solid grey', paddingBottom: '10px'}} target="_blank">AngelList</a>
                        </li>
                        <li className="dropdownItem" onClick={endSession}>Logout</li>
                    </ul>

                    {/* trial dropdown below */}
                    {/* <div className="profile-drop-down">
                        <div className="profile-drop-down-sub-container">
                            <ul className="profile-drop-down-list">
                                <li className="profile-drop-down-item"><a href="https://github.com/khaliqzohaib92">Github</a></li>
                                <li className="profile-drop-down-item"><a href="https://www.linkedin.com/in/zohaibkhaliq/">Linkedin</a></li>
                                <li className="profile-drop-down-item"><a href="https://angel.co/u/zohaib-khaliq-2">AngelList</a></li>
                                <li className="profile-drop-down-item" style={{borderBottom: '1px solid grey', paddingBottom: '10px'}}><a href="http://khaliqzohaib92.github.io/">Portfolio</a></li>
                                <li onClick={endSession} className="profile-drop-down-item">Sign Out</li>
                            </ul>
                        </div>
                    </div> */}


                </div>
            </header>
        )

    } else {
        return (
            <header className="pageHeader">
                <Link to="/"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                <Link  id="login" className="btn" to="/login">Sign In</Link>
            </header>
        )
    }
}

export default Navi;