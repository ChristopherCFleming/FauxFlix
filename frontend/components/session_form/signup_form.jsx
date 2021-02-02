import React from 'react';
import Header from '../reusable_components/header';
import Footer from '../reusable_components/footer';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
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
                        <p>{error}</p>
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
                        <h1>Create a password to start your membership.</h1>
                        <h2>Just a few more steps and you're done! We hate paperwork, too.</h2>
                        <form onSubmit={this.handleSubmit} className="signupInputForm">
                            <input type="email" name="email" className="emailBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="passwordBar"/>
                            <button type="submit" className="btn">CONTINUE</button>
                        </form>
                    </div>
                <Footer />
            </div>
        )
    }
}


export default SignupForm;