import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    logout2: () => dispatch(logout(currentUser)) //testing this to see what one I need to use. Not sure.
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);