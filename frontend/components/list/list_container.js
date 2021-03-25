import { connect } from 'react-redux';
import React from 'react';
import List from './list';
import { logout } from '../../actions/session_actions';
import { fetchLists } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        lists: state.entities.lists,
    };
};

const mapDispatchToProps = dispatch => {
    return {
         logout: () => dispatch(logout()),
         fetchLists: () => dispatch(fetchLists()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
