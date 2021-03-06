import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../navi/navi_container';
import Footer from '../footer/footer';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
                        <p>{error}</p>
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
        this.props.processForm(sampleInfo);
    }

    render() {
        return (
            <div className="loginPage">
                <div className="shadowDiv">
                    <Navi />
                        <div className="loginPageContent">
                            <h1>Sign In</h1>
                            <form onSubmit={this.handleSubmit} className="infoInputForm">
                                <input type="email" name="email" className="emailBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                                <br/>
                                <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="passwordBar"/>
                                {this.renderErrors()}
                                <br/>
                                <button type="submit" className="btn">Sign In</button>
                                <h5>New to FauxFlix? 
                                    <Link to="/signup1?email=" className="signUpLink"> Sign up now</Link>.
                                </h5>
                                <Link to="/browse" className="btn demoLogin" onClick={this.demoLogin}>Demo Login</Link>
                            </form>
                        </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default LoginPage;