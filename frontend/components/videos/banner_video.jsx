import React from 'react';

function BannerVideo(props) {
    if (!props.randVideo) {
        return null;
    } else { 
        return (
            <div className="bannerVideoWrapper">
                <video muted={true} controls={false} autoPlay={true} loop={true} src={props.randVideo.video} width="100%" height="50%" className="banner" type="video/mp4"></video>
                <p className="bannerVideoTitle">{props.randVideo.title}</p>
            </div>
        )
    }
}


export default BannerVideo;