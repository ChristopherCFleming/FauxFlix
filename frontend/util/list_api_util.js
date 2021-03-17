
export const addToList = (list)=>{
    return $.ajax({
        url: `api/lists`,
        method:'POST',
        data: {list}
    })
};

export const fetchLists = (userId)=>{
    return $.ajax({
        url: `api/users/${userId}/lists`
    })
};

export const removeListItem = (list) =>{
    return $.ajax({
        url: `api/lists/${list.video_id}`,
        data: {list},
        method: 'DELETE'
    })
}