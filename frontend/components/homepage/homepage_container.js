import { connect } from 'react-redux';
import { allVideos } from '../../actions/video_actions';
import Homepage from './homepage';
import { allGenres } from '../../actions/genre_actions';
import { fetchLists, addToList, deleteListItem } from '../../actions/list_actions';


const mSTP = (state, ownProps) => {
    return {
        videos: state.entities.videos,
        allVideosArray: Object.values(state.entities.videos),
        allGenresArray: Object.values(state.entities.genres),
        list: state.entities.lists,
        userId: state.session.id,
    }
}

const mDTP = (dispatch) => {
    return {
        allVideos: () => dispatch(allVideos()),
        showVideo: (video_id) => dispatch(showVideo(video_id)),
        allGenres: () => dispatch(allGenres()),
        fetchLists: () => dispatch(fetchLists()),
        addToList: (list) => dispatch(addToList(list)),
        deleteListItem: (videoId) => dispatch(deleteListItem(videoId)),
    }
};

export default connect(mSTP, mDTP)(Homepage)

