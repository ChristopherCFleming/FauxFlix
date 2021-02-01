import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../reusable_components/header';
import Footer from '../reusable_components/footer';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
            <div className="loginPage">
                <Header />

                <Footer />
            </div>
        )
    }
}

export default LoginPage;