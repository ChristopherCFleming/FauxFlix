import React from 'react';

function BannerVideo(props) {
    if (!props.randVideo) {
        return null;
    } else { 
        return (
            <div>
                <video muted="false" controls="controls" autoplay="autoplay" loop width="100%" height="50%" className="banner">
                    <source src={props.randVideo.video} type="video/mp4"/>
                </video>
                <p>{props.randVideo.title}</p>
            </div>
            

        )
    }
}


export default BannerVideo;