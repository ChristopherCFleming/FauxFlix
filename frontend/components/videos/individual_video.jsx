import React, {useState} from 'react';
import { Link } from 'react-router-dom';


class IndividualVideo extends React.Component {
    constructor(props) {
        super(props)
        this.videoElement = React.createRef();
        this.playVideo = this.playVideo.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.shortenDescription = this.shortenDescription.bind(this);
    }

    

    playVideo(e) {
        this.videoElement.current.play();
    }

    stopVideo(e) {
         this.videoElement.current.load(); 
    }

    shortenDescription(description) {
        return description.slice(0, 35) + "...";
    }
    render() {
        if (this.props.video) {
            return (
                <div className="videoSlideContainer" 
                    onMouseEnter={this.playVideo} 
                    onMouseLeave={this.stopVideo}>
                    <Link to={`/videos/${this.props.video.id}`}>
                        <video 
                            ref={this.videoElement}
                            loop={true}
                            muted={true}
                            poster={this.props.video.thumbnail} 
                            src={this.props.video.video} 
                            className="carouselVideo"
                            id="1" />
                    </Link>
                    <div className="videoDropDown">
                        <div className="buttonWrapper">
                            <span><Link to={`/videos/${this.props.video.id}`}><i className="far fa-play-circle"></i></Link></span>
                            <span><i className="fas fa-plus-circle"></i></span>
                            <h4>{this.props.video.title}</h4>
                        </div>
                        <p>{this.shortenDescription(this.props.video.description)}</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default IndividualVideo;