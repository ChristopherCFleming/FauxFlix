import {RECEIVE_GENRES} from '../actions/genre_actions';

const _nullState = {}

const GenreReducer = (state = _nullState, action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_GENRES:
            return Object.assign({}, state, action.genres);
        default:
            return state;
    }
}

export default GenreReducer;