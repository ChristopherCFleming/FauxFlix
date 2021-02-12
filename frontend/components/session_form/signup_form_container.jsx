import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to="/signup">Sign up now</Link>,
        // email: this.state.email
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);