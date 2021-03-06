import { connect } from 'react-redux';
import List from './list';
import { fetchLists } from '../../actions/list_actions';
import { allVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.entities.lists,
        videos: state.entities.videos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
         fetchLists: () => dispatch(fetchLists()),
         allVideos: () => dispatch(allVideos()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
