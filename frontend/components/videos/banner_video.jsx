import React from 'react';
import { Link } from 'react-router-dom';

function BannerVideo(props) {

    if (!props.randVideo) {
        console.log(props);
        return null;
    } else { 
        return (
            <div className="bannerVideoWrapper">
                <div className="gradientWrapper">
                    <video muted={true} controls={false} autoPlay={true} loop={true} src={props.randVideo.video} width="100%" height="50%" className="banner" type="video/mp4"></video>
                </div>
                <div className="videoDetailsContainer">
                    <h1 className="bannerVideoTitle">{props.randVideo.title}</h1>
                    <p>Watch Now</p>
                    <h5 className="bannerVideoDescription">{props.randVideo.description}</h5>
                    <div className="buttonsWrapper">
                        <Link to={`/videos/${props.randVideo.id}`} className="btn playButton" ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="playicon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>Play</Link>
                        <div className="btn addToListButton"><svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg><span> Add To List</span></div>

                    </div>
                </div>
            </div>
        )
    }
}


export default BannerVideo;