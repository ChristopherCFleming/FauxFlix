import { connect } from 'react-redux';
import React from 'react';
import Search from './search';
import { fetchLists } from '../../actions/list_actions';
import { allVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        videos: state.entities.videos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allVideos: () => dispatch(allVideos()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
