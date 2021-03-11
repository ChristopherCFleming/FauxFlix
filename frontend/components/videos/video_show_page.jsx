import React from 'react';
import Footer from '../reusable_components/footer';
import { Link } from 'react-router-dom';


// THIS IS NOT WORKING FOR SOME REASON! Maybe come back and swap this out for the class component we're currently using and debug, but for now stick with the class version.

function VideoShow(props) {
    if (!props.video) {
        console.log("Nothing to render...");
        return null;
    } else { 
        return (
            <div className="videoShowWrapper">
                <div className="videoShowWrapper">
                    <div className="videoShowNaviContainer">
                        <Link to="/browse">
                            <div className="naviElements">
                                <i className="fas fa-arrow-left"></i>
                                <p>Back to Browse</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <video muted={false} controls={true} autoPlay={true} loop={true} src={props.video.video} width="100%" height="50%" className="videoShow" type="video/mp4"></video>
                <Footer />
            </div>
        )
    }
}

export default VideoShow;