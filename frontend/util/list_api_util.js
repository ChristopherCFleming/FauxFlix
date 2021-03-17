
export const addToMyList = (mylist)=>{
    return $.ajax({
        url: `api/mylists`,
        method:'POST',
        data: {mylist}
    })
};

export const fetchMyLists = (profileId)=>{
    return $.ajax({
        url: `api/profiles/${profileId}/mylists`
    })
};

export const removeMyListItem = (mylist) =>{
    return $.ajax({
        url: `api/mylists/${mylist.video_id}`,
        data: {mylist},
        method: 'DELETE'
    })
}