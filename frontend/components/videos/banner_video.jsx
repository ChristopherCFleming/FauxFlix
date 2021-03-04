import React from 'react';

function BannerVideo(props) {
    if (!props.randVideo) {
        return null;
    } else { 
        return (
            <div className="bannerVideoWrapper">
                <video muted={true} controls={false} autoPlay={true} loop={true} src={props.randVideo.video} width="100%" height="50%" className="banner" type="video/mp4"></video>
                <div className="videoDetailsContainer">
                    <h1 className="bannerVideoTitle">{props.randVideo.title}</h1>
                    <p>Watch Now</p>
                    <h5 className="bannerVideoDescription">{props.randVideo.description}</h5>

                </div>
            </div>
        )
    }
}


export default BannerVideo;