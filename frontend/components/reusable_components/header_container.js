import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session, entities: { users } }) => {
    //trying to restructure the destructure from above:
    // const mapStateToProps = (state) => {
    return {
        currentUser: users[session.id]
        // currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);