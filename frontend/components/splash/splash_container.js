import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SplashPage from './splash';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
