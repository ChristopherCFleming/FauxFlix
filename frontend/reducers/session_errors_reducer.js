import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';


const errors = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign([], oldState)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];          
        default:
            return oldState;
    }
};

export default errors;
