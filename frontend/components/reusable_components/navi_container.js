import { connect } from 'react-redux';
import Navi from './navi_class';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        videos: state.entities.videos,
        loggedIn: ownProps.loggedIn,
        homepage: ownProps.homepage,
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
};

export default connect(mSTP, mDTP)(Navi)