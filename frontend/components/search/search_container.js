import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import Search from './search';
import { fetchLists } from '../../actions/list_actions';
import { allVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        videosArray: Object.values(state.entities.videos),
        query: ownProps.location.search.split("q=")[1],

        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allVideos: () => dispatch(allVideos()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
