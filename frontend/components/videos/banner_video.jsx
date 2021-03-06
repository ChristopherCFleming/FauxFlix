import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function BannerVideo(props) {

    const [muted, setMuted] = useState(true);

    function addOrRemoveFromList(e) {
        const requiredArgs = {
            video_id: props.randVideo.id,
            user_id: props.userId,
        }

        if (props.list.includes(props.randVideo.id)) {
            props.deleteListItem(requiredArgs)
        } else {
            props.addToList({
                video_id: props.randVideo.id,
                user_id: props.userId,
            })
        }
    }

    function toggleMute() {
        const bannerVideo = document.getElementById("bannerVideo");

        if (muted) {
            bannerVideo.muted = false;
            setMuted(false);
        } else {
            bannerVideo.muted = true;
            setMuted(true);
        }
    }

    if (!props.randVideo) {
        console.log(props);
        return null;
    } else { 
        return (
            <div className="bannerVideoWrapper">
                <div className="gradientWrapper">
                    <video 
                        muted
                        autoPlay
                        loop 
                        src={props.randVideo.video} 
                        width="100%" 
                        height="50%" 
                        className="banner"
                        id="bannerVideo" />
                </div>
                <div onClick={toggleMute} className="muteButton">{(muted) ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}</div>
                <div className="videoDetailsContainer">
                    <h1 className="bannerVideoTitle">{props.randVideo.title}</h1>
                    <p>Watch Now</p>
                    <h5 className="bannerVideoDescription">{props.randVideo.description}</h5>
                    <div className="buttonsWrapper">
                        <Link to={`/videos/${props.randVideo.id}`} className="btn playButton" ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="playicon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg>Play</Link>
                        <div className="btn addToListButton" onClick={addOrRemoveFromList}><span className="plusOrMinus">{props.list.includes(props.randVideo.id) ? "-" : "+"}</span><span className="buttonText">{props.list.includes(props.randVideo.id) ? " Remove" : " Add To List"}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BannerVideo;