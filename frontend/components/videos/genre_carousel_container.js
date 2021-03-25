import { connect } from 'react-redux';
import { allVideos } from '../../actions/video_actions';
import Genre from './genre_class_component';
import { logout } from '../../actions/session_actions';
import { allGenres } from '../../actions/genre_actions';


const mSTP = (state, ownProps) => {
    return {
        videos: state.entities.videos,
        allVideosArray: Object.values(state.entities.videos),
        allGenresArray: Object.values(state.entities.genres),
    }
}

const mDTP = (dispatch) => {
    return {
        allVideos: () => dispatch(allVideos()),
        showVideo: (video_id) => dispatch(showVideo(video_id)),
        //again, only adding logout so I can pass it to navi trial component
        logout: () => dispatch(logout()),
        allGenres: () => dispatch(allGenres()),
    }
};

export default connect(mSTP, mDTP)(Genre)
