import * as APIVideoUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

const receiveVideos = videos => {
    return {
        type: RECEIVE_VIDEOS,
        videos: videos
    }
}

const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video: video
    }
}

export const allVideos = videos => dispatch => {
    return APIVideoUtil.allVideos(videos)
    .then(videos => dispatch(receiveVideos(videos)))
}

export const showVideo = video => dispatch => {
    return APIVideoUtil.showVideos(video)
        .then(video => dispatch(receiveVideo(video)))
}
