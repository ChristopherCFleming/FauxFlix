import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function IndividualVideo(props) {

    const randomNumber = Math.floor(Math.random() * Math.floor(20000)); 
    const videoElement = document.getElementById("1");
    

    function playVideo(e) {
        videoElement.play();
    }

    function stopVideo(e) {
        videoElement.load(); 
    }

    function shortenDescription(description) {
        return description.slice(0, 35) + "...";
    }

    if (props.video) {
        return (
            <div className="videoSlideContainer"
                onMouseOver={playVideo} 
                onMouseOut={stopVideo}>
                <Link to={`/videos/${props.video.id}`}>
                    <video 
                        loop
                        poster={props.video.thumbnail} 
                        src={props.video.video} 
                        className="carouselVideo"
                        id="1" />
                </Link>
                <div className="videoDropDown">
                    <div className="buttonWrapper">
                        <span><Link to={`/videos/${props.video.id}`}><i className="far fa-play-circle"></i></Link></span>
                        <span><i className="fas fa-plus-circle"></i></span>
                        <h4>{props.video.title}</h4>
                    </div>
                    <p>{shortenDescription(props.video.description)}</p>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default IndividualVideo;