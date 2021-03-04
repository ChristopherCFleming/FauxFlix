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

export const allVideos = () => dispatch => {
    return APIVideoUtil.fetchAllVideos()
    .then(videos => dispatch(receiveVideos(videos)))
}

export const showVideo = video_id => dispatch => {
    return APIVideoUtil.fetchVideo(video_id)
        .then(payload_video => dispatch(receiveVideo(payload_video)))
}
