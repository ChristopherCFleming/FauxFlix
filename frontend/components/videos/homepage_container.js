import { connect } from 'react-redux';
import { allVideos } from '../../actions/video_actions';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';
import { allGenres } from '../../actions/genre_actions';
import { fetchLists, addToList, deleteListItem } from '../../actions/list_actions';


const mSTP = (state, ownProps) => {
    return {
        videos: state.entities.videos,
        allVideosArray: Object.values(state.entities.videos),
        allGenresArray: Object.values(state.entities.genres),
        //only adding lists and ID to pass to banner and individual video components
        lists: state.entities.lists,
        id: state.session.id,
    }
}

const mDTP = (dispatch) => {
    return {
        allVideos: () => dispatch(allVideos()),
        showVideo: (video_id) => dispatch(showVideo(video_id)),
        //again, only adding logout so I can pass it to navi trial component
        logout: () => dispatch(logout()),
        allGenres: () => dispatch(allGenres()),
        fetchLists: () => dispatch(fetchLists()),
        addToList: (list) => dispatch(addToList(list)),
        deleteListItem: (videoId) => dispatch(deleteListItem(videoId)),
    }
};

export default connect(mSTP, mDTP)(Homepage)

