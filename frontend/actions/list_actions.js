import * as ListUtils from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";


const receiveLists = (lists) => {
    return {
        type: RECEIVE_LISTS,
        lists
    }
}

const receiveList = (list) => {
    return {
        type: RECEIVE_LIST,
        list
    }
}

const removeListItem = (videoId) => {
    return {
        type: REMOVE_LIST_ITEM,
        videoId
    }
}

export const fetchLists = (userId) => dispatch => {
    return ListUtils.fetchLists(userId)
    .then(lists => dispatch(receiveLists(lists)));
}

export const addToList = (list) => dispatch => {
    return ListUtils.addToList(list)
    .then(list => dispatch(receiveList(list)));
}

export const deleteListItem = (list) => dispatch => {
    return ListUtils.removeListItem(list)
    .then(() => dispatch(removeListItem(list.video_id)));
}

// Suspect this is causing problems below...

export const fetchListVideos = (videoIds, videos)=>{
    return videoIds.map((videoId) => {
        return videos[videoId];
    })
}
