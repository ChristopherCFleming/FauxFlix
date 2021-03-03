import React from 'react';
import Header from '../reusable_components/header';
import Footer from '../reusable_components/footer';
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
                <Header />
                    <div className="signupContent partOne">
                        <img src={window.signup_devices} alt="signup_devices" className="signupDevices"/>
                        <br/>
                        <p>STEP <strong>1</strong> of <strong>2</strong></p>
                        <br/>
                        <h1>Create a password to start your<br /> membership.</h1>
                        <br/>
                        <h2>Just a few more steps and you're done! <br />We hate paperwork, too.</h2>
                        <br/>
                        <Link to={`/signup?email=${this.state.email}`} className="btn signupButton">CONTINUE</Link>
                    </div>
                <Footer />
            </div>
        )
    }
}


export default SignupFormP1;