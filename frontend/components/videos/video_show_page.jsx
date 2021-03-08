import React from 'react';
import Footer from '../reusable_components/footer';
import Navi from '../reusable_components/navi';

function VideoShow(props) {
    if (!props.video) {
        console.log("Nothing to render...");
        return null;
    } else { 
        return (
            <div className="videoShowWrapper">
                <Navi />
                <video muted={false} controls={true} autoPlay={true} loop={true} src={props.video.video} width="100%" height="50%" className="videoShow" type="video/mp4"></video>
                <Footer />
            </div>
        )
    }
}

export default VideoShow;