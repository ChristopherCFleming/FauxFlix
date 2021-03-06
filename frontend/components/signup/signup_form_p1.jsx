import React from 'react';
import Navi from '../navi/navi_container';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

class SignupFormP1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: window.location.href.split("email=")[1],
            password: ""
        }
    }

    render() {
        return (
            <div className="signupPage">
                <Navi />
                    <div className="signupContent partOne">
                        <img src={window.signup_devices} alt="signup_devices" className="signupDevices"/>
                        <br/>
                        <p>STEP <strong>1</strong> of <strong>2</strong></p>
                        <br/>
                        <h1>Finish setting up your account.</h1>
                        <br/>
                        <h2>Netflix is personalized for you. <br/>Create a password to watch Netflix on any <br/>device at any time.</h2>
                        <br/>
                        <Link to={`/signup?email=${this.state.email}`} type="submit" className="btn signupButton">CONTINUE</Link>
                        <br/>
                    </div>
                <Footer />
            </div>
        )
    }
}


export default SignupFormP1;