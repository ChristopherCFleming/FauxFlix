import { connect } from 'react_redux';
import { allVideos } from '../../actions/video_actions';
import Videos from './videos';


const mSTP = (state, ownProps) => {
    return {
        videos: state.videos
    }
}

const mDTP = (dispatch) => {
    return {
        allVideos: (videos) => dispatch(allVideos(videos))
    }
};

export default connect(mSTP, mDTP)(Videos)

