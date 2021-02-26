import React from 'react';

function BannerVideo(props) {
    if (!props.randVideo) {
        return null;
    } else { 
        return (
            <div>
                <video muted={true} controls={true} autoPlay={true} loop={true} src={props.randVideo.video} width="100%" height="50%" className="banner" type="video/mp4"></video>
                <p>{props.randVideo.title}</p>
            </div>
        )
    }
}


export default BannerVideo;