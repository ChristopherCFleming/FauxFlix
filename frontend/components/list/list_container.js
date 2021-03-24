import { connect } from 'react-redux';
import React from 'react';
import List from './list';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mapDispatchToProps = dispatch => {
    return {
         logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
