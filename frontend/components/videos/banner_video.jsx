import React from 'react';

function BannerVideo(props) {
    console.log(props.randVideo)
    if (!props.randVideo) {
        return null;
    } else { 
        return (
            <div>
                {/* What I think it should be: */}
                {/* <video muted={false} controls={true} autoPlay={true} loop={true} width="100%" height="50%" className="banner" type="video/mp4"> */}
                {/* What almost works but is wrong: */}
                <video muted="false" controls="controls" autoPlay="autoplay" loop="loop" width="100%" height="50%" src={props.randVideo.video} className="banner bannerVideo">
                </video>
                <p>{props.randVideo.title}</p>
            </div>
        )
    }
}


export default BannerVideo;