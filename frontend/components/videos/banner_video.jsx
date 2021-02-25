import React from 'react';

function BannerVideo(props) {
    if (!props.randVideo) {
        return null;
    } else { 
        return (
            <div>
                <video muted width="100%" autoPlay="autoPlay" loop="loop" height="50%" controls="controls" className="banner">
                    <source src={props.randVideo.video} type="video/mp4"/>
                </video>
                <p>{props.randVideo.title}</p>
            </div>
            

        )
    }
}


export default BannerVideo;