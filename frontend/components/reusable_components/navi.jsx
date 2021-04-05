import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

function Navi(props) {

    const [background, setBackground] = useState(false);
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const searchMovie = useRef();
    const searchInput = useRef();

    if (props.homepage) {
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
    }

    function handleClickOpen(e) {
        if (searchBarOpen === false) {
            searchInput.current.focus();
            setSearchBarOpen(true);
            e.target.value = '';
        }
    }

    function formatSearch(input) {
        const query = input.toLowerCase();
        return `/search/${query}`;
    }

    function search(e) {
        if (e.target.value === '') {
            props.history.push('/browse');
        } else {
            props.history.push(formatSearch(e.target.value));
        }
    }

    function searchDebounce(e) {
        setTimeout(() => search(e), 1000);
    }

    function endSession() {
        props.logout();
    }

    if (props.loggedIn) {
        return (
            <header className={`pageHeader loggedIn ${background ? "active" : ""}`}>
                <div className="firstSection">
                    <Link to="/browse"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <div className="subNavi">
                        <Link to="/browse" className="headerLink">Home </Link>
                        <Link to="/list" className="headerLink">My List </Link>
                    </div>
                </div>
                <div className="secondSection">

                    <div className="searchContainer">
                        <div className="search" ref={searchMovie}>
                            <input
                                id="searchEle"
                                onChange={searchDebounce}
                                className={searchBarOpen ? 'toggle input' : 'input'}
                                type="text"
                                placeholder="Movie Info"
                                autoFocus
                                ref={searchInput}>
                            </input>
                        <i onClick={handleClickOpen}
                            className={searchBarOpen ? 'fas fa-search active sub-nav-logo' : 'fas fa-search sub-nav-logo'}>
                        </i>
                        </div>
                    </div>

                    <img className="profilePic" src={window.profile_pic} alt="Profile Pic" />
                    <i className="fas fa-caret-down" id="downCaret"></i>
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
                        <li className="dropdownItem secondToLast">
                            <a href="https://angel.co/u/christopher-c-fleming" target="_blank">AngelList</a>
                        </li>
                        <li className="dropdownItem Last" onClick={endSession}>Logout</li>
                    </ul>
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