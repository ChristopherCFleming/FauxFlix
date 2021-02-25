import { connect } from 'react-redux';
import { allVideos } from '../../actions/video_actions';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';


// const mSTP = (state, { session, entities: { users } }) => {
const mSTP = (state, ownProps) => {
    return {
        // videos: state.entities.videos,
        allVideosArray: Object.values(state.entities.videos),
        //only adding currentUser below so I can pass it to the navi trial component
        // currentUser: users[session.id]
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        allVideos: () => dispatch(allVideos()),
        showVideo: (video_id) => dispatch(showVideo(video_id)),
        //again, only adding logout so I can pass it to navi trial component
        logout: () => dispatch(logout()),
    }
};

export default connect(mSTP, mDTP)(Homepage)

