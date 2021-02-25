import React from 'react';
import { Link } from 'react-router-dom';
// import { receiveCurrentUser } from '../../actions/session_actions';
// import { logout } from '../../actions/session_actions';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.endSession = this.endSession.bind(this)
        // let scrollpos = window.scrollY;
        // const header = document.getElementByClassName("loggedIn");
    }



    endSession(e) {
        e.preventDefault();
        this.props.logout();
    }

    //Jquery way to do it
    // $(window).scroll(function() {
    // //After scrolling 100px from the top...
    //     if ( $(window).scrollTop() >= 100 ) {
    //     $('.pageHeader.loggedIn').addClass('active');

    // //Otherwise remove inline styles and thereby revert to original styling
    //     } else {
    //         $('.pageHeader.loggedIn').removeClass('active');
    //     }
    // });


    //pureJavascript way to do it (added both vars from below to constructor above): 
    // var scrollpos = window.scrollY;
    // var header = document.getElementByClassName("loggedIn");

    // add_class_on_scroll() {
    //     this.header.classList.add("active");
    // }

    // remove_class_on_scroll() {
    //     this.header.classList.remove("active");
    // }

    // window.addEventListener('scroll', function(){ 
    //     this.scrollpos = window.scrollY;

    //     if(this.scrollpos > 100){
    //         add_class_on_scroll();
    //     }
    //     else {
    //         remove_class_on_scroll();
    //     }
    //     console.log(this.scrollpos);
    // )};



    render() {
        if (!this.props.currentUser) {
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
                    
                    <Link to="/" onClick={this.endSession}><img className="profilePic" src={window.profile_pic} alt="Profile Pic" /></Link>
                    {/* <Link to="/URL FOR LIST HERE!!!!">My List</Link> */}
                </header>
            )
        }

    }
}

export default Header;