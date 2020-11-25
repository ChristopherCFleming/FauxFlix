export const showVideo = video_id => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${video_id}`,
    })
};

export const allVideos = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos`
    })
}