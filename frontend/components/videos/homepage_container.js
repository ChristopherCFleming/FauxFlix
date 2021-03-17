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
        //only adding currentUser below so I can pass it to the navi trial component
        currentUser: state.entities.users[state.session.id],
        allGenresArray: Object.values(state.entities.genres),
        //only adding lists to pass to banner and individual video components
        lists: state.entities.lists,

    }
}

const mDTP = (dispatch) => {
    return {
        allVideos: () => dispatch(allVideos()),
        showVideo: (video_id) => dispatch(showVideo(video_id)),
        //again, only adding logout so I can pass it to navi trial component
        logout: () => dispatch(logout()),
        allGenres: () => dispatch(allGenres()),
        fetchLists: (userId) => dispatch(fetchLists(userId)),
        addToList: (list) => dispatch(addtoList(list)),
        deleteListItem: (list) => dispatch(deleteListItem(list)),

    }
};

export default connect(mSTP, mDTP)(Homepage)

