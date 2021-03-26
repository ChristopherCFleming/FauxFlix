import { connect } from 'react-redux';
import React from 'react';
import List from './list';
import { logout } from '../../actions/session_actions';
import { fetchLists } from '../../actions/list_actions';
import { allVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        list: state.entities.lists,
        videos: state.entities.videos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
         logout: () => dispatch(logout()),
         fetchLists: () => dispatch(fetchLists()),
         allVideos: () => dispatch(allVideos()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
