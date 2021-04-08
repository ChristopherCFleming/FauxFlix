import React from 'react';
import Navi from '../header_and_footer/navi_container';
import Footer from '../header_and_footer/footer';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: window.location.href.split("email=")[1],
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        <p className="errorMessage">{error}</p>
                    </li>
                ))}
            </ul>
        );
    }

    demoLogin() {
        const sampleInfo = {
            email: "testing0@gmail.com",
            password: "testing0"
        }
        this.props.login(sampleInfo);
    }


    render() {
        return (
            <div className="signupPage">
                <Navi />
                    <div className="signupContent">
                        <p>STEP <strong>2</strong> of <strong>2</strong></p>
                        <br/>
                        <h1>Create a password to start your<br /> membership.</h1>
                        <br/>
                        <h2>Just a few more steps and you're done! <br />We hate paperwork, too.</h2>
                        <form onSubmit={this.handleSubmit} className="signupInputForm">
                            <input type="email" name="email" className="emailBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                            <br />
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="passwordBar"/>
                            {this.renderErrors()}
                            <br/>
                            <button type="submit" className="btn signupButton">CONTINUE</button>
                            <br/>
                            <Link to="/browse" className="btn demoLogin" onClick={this.demoLogin}>Demo Login</Link>
                        </form>
                    </div>
                <Footer />
            </div>
        )
    }
}


export default SignupForm;