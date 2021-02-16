import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LargeVideo from './large_video';


const mapStateToProps = (state) => {
    return {
        videos: state.entities.videos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allVideos: () => dispatch(allVideos()),
        showVideo: (video_id) => dispatch(showVideo(video_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LargeVideo);
