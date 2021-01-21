import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    render() {
        return (
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
                        <div className="emailInput">
                            <input type="email" name="email" class="inputBar" value={this.state.email} onChange={this.update("email")} autocomplete="email"></input>
                            <Link to="/signup" id="createAccount" className="btn">Get Started<i className="fas fa-chevron-right btn-icon"></i></Link>
                        </div>
                        <a href="#" id="demoLogin" className="btn">
                            Demo Login
                        </a>
                    </div>
                    <div className="firstSubsectionContainer subsection">
                        <div className="firstSubsectionText">
                            <h1>Enjoy on your TV.</h1>
                            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <img src={window.tvURL} alt="TV" className="TV"/>
                    </div>
                    <div className="secondSubsectionContainer subsection">
                        <img src={window.handheldURL} alt="handheld" className="handheld"/>
                        <div className="secondSubsectionText">
                            <h1>Download your shows to watch offline.</h1>
                            <p>Save your favorites easily and always have something to watch.</p>
                        </div>
                    </div>
                    <div className="thirdSubsectionContainer subsection">
                        <div className="thirdSubsectionText">
                            <h1>Watch everywhere.</h1>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                        </div>
                        <img src={window.allDevicesURL} alt="allDevices" className="allDevices"/>
                    </div>
                </header>
    
            </body>
        )
    }
}

export default Greeting;

 