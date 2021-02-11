import { connect } from 'react-redux';
import { allVideos } from '../../actions/video_actions';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';


const mSTP = (state, ownProps) => {
    return {
        videos: state.entities.videos
    }
}

const mDTP = (dispatch) => {
    return {
        allVideos: () => dispatch(allVideos()),
        logout: () => dispatch(logout(currentUser))  //not sure if this is correct
    }
};

export default connect(mSTP, mDTP)(Homepage)

