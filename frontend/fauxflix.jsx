//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
//must remove below before production
import * as APIVideoUtil from './util/video_api_util';



document.addEventListener('DOMContentLoaded', () => {
    let store;
    //must remove below before production (Bootstrapping)
    window.APIVideoUtil = APIVideoUtil;
    //end of temporary testing
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
