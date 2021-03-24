import { connect } from 'react-redux';
import React from 'react';
import List from './list';
import { fetchListVideos } from '../actions/list_actions';

const mapStateToProps = ({ errors }) => {
    return {
        list_videos: fetchMyListVideos(state.entities.mylist, state.entities.videos)
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
