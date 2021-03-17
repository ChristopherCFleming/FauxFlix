import * as MyListUtils from '../util/list_api_util';

export const RECEIVE_MY_LISTS = "RECEIVE_MY_LISTS";
export const RECEIVE_MY_LIST = "RECEIVE_MY_LIST";
export const REMOVE_MY_LIST_ITEM = "REMOVE_MY_LIST_ITEM";


const receiveMyLists = (mylists) => {
    return {
        type: RECEIVE_MY_LISTS,
        mylists
    }
}

const receiveMyList = (mylist) => {
    return {
        type: RECEIVE_MY_LIST,
        mylist
    }
}

const removeMyListItem = (videoId) => {
    return {
        type: REMOVE_MY_LIST_ITEM,
        videoId
    }
}

export const fetchMyLists = (profileId) => dispatch => {
    return MyListUtils.fetchMyLists(profileId)
    .then(mylists => dispatch(receiveMyLists(mylists)));
}

export const addToMyList = (mylist) => dispatch => {
    return MyListUtils.addToMyList(mylist)
    .then(mylist => dispatch(receiveMyList(mylist)));
}

export const deleteMyListItem = (mylist) => dispatch => {
    return MyListUtils.removeMyListItem(mylist)
    .then(() => dispatch(removeMyListItem(mylist.video_id)));
}

