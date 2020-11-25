import {
    RECEIVE_VIDEOS,
    RECEIVE_VIDEO,
} from '../actions/video_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos; //this doesn't seem right....
        case RECEIVE_VIDEO:
            nextState[video.id] = action.video
            return nextState
        default:
            return state;
    }
};

export default videosReducer;
