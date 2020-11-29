import { connect } from 'react-redux';
import { showVideo } from '../../actions/video_actions';
import Videos from './videos';


const mSTP = (state, ownProps) => {
    return {
        video: state.video
    }
}

const mDTP = (dispatch) => {
    return {
        showVideo: (video) => dispatch(showVideo(video))
    }
};

export default connect(mSTP, mDTP)(Videos)

