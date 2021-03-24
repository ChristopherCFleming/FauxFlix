import { connect } from 'react-redux';
import { addToList, deleteListItem } from '../../actions/list_actions';
import VideoTile from './video_tile';

    const mSTP = (state, ownProps) => {
        return {
            video: ownProps.video,
            id: state.session.id,
            inList: state.entities.lists.includes(ownProps.video.id),
        }
    }

const mDTP = (dispatch) => {
    return {
        addToList: (list) => dispatch(addToList(list)),
        deleteListItem: (videoId) => dispatch(deleteListItem(videoId)),
    }
};

export default connect(mSTP, mDTP)(VideoTile)