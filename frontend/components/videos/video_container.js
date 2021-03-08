import { connect } from 'react-redux';
import { showVideo } from '../../actions/video_actions';
import { logout } from '../../actions/session_actions';
import Video from './video';

    const mSTP = (state, ownProps) => {
        const id = ownProps.match.params.id;
        const video = state.entities.videos[id]
        return {
            id: id,
            video: video,
            currentUser: state.entities.users[state.session.id]
        }
    }

const mDTP = (dispatch) => {
    return {
        showVideo: (video_id) => dispatch(showVideo(video_id)),
        logout: () => dispatch(logout())
    }
};

export default connect(mSTP, mDTP)(Video)

