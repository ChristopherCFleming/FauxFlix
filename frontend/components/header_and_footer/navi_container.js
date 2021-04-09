import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Navi from './navi';
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

export default connect(mSTP, mDTP)(withRouter(Navi))