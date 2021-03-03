import React from 'react';
import Header from '../reusable_components/header';
import Footer from '../reusable_components/footer';

class SignupFormP1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: window.location.href.split("email=")[1],
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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


    render() {
        return (
            <div className="signupPage">
                <Header />
                    <div className="signupContent">
                        <img src={window.signup_devices} alt="signup_devices" className="signupDevices"/>
                        <h1>Create a password to start your<br /> membership.</h1>
                        <br/>
                        <h2>Just a few more steps and you're done! <br />We hate paperwork, too.</h2>
                        <form onSubmit={this.handleSubmit} className="signupInputForm">
                            <input type="email" name="email" className="emailBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                            {this.renderErrors()}
                            <br />
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="passwordBar"/>
                            {this.renderErrors()}
                            <br/>
                            <button type="submit" className="btn">CONTINUE</button>
                        </form>
                    </div>
                <Footer />
            </div>
        )
    }
}


export default SignupFormP1;