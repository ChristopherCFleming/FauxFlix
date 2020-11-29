import { combineReducers } from 'redux';
import users from './users_reducer';
import videosReducer from './videos_reducer';

export default combineReducers({
    users,
    videosReducer,
});
