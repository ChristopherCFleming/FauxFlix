import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';


const errors = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign([], oldState) //I THINK I get why we don't need this, but not sure.
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];            //why return a blank []? why not null? or oldState?
            // return null;
            //return oldState;
        default:
            return oldState;
    }
};

export default errors;

// const errors = (state = [], action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_SESSION_ERRORS:
//             return action.errors;
//         case RECEIVE_CURRENT_USER:
//             return [];
//         default:
//             return state;
//     }
// };

// export default errors;
