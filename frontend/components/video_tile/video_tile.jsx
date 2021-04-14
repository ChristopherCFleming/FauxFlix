import React from 'react';
import { Link } from 'react-router-dom';


class VideoTile extends React.Component {
    constructor(props) {
        super(props)
        this.videoElement = React.createRef();
        this.videoContainer = React.createRef();
        this.state = {
            muteStatus : true,
        };
        this.stopVideo = this.stopVideo.bind(this);
        this.playVideo = this.playVideo.bind(this);
        this.shortenDescription = this.shortenDescription.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.addToList = this.addToList.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        // testing the two below to throttle and delay video playback
        this.testPlay = this.testPlay.bind(this);
        this.throttle = this.throttle.bind(this);
    }


    addToList(e){
        this.props.addToList({
           video_id: this.props.video.id,
           user_id: this.props.id,
        })
    }

    deleteListItem(e){
        this.props.deleteListItem({
            video_id: this.props.video.id,
            user_id: this.props.id,
        })
    }

    toggleMute() {
        if (this.state.muteStatus) {
            this.videoElement.current.muted = false;
            this.setState({
                muteStatus: false
            });
        } else {
            this.videoElement.current.muted = true;
            this.setState({
                muteStatus: true
            });
        }
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


    // These Last two functions are only to try and throttle video play.
    throttle(target) {
        // if (currentlyHoveringOver.includes("video.carouselVideo")) {
        //     console.log("Got it!");
        // } else {
        //     console.log("Ref not found in array");
        // }

        console.log(target);
        
    }
    

    testPlay(e) {
        setTimeout( function() {
            const target = e.currentTarget;
            console.log(target)
        }, 1000)
    }

    render() {


        if (this.props.video) {
            return (
                <div className="videoSlideContainer" 
                    onMouseEnter={this.playVideo} 
                    onMouseLeave={this.stopVideo}
                    ref={this.videoContainer}>
                    <Link to={`/videos/${this.props.video.id}`}>
                        <video 
                            ref={this.videoElement}
                            loop={true}
                            muted={true}
                            poster={this.props.video.thumbnail} 
                            src={this.props.video.video} 
                            className="carouselVideo" />
                    </Link>
                    <div onClick={this.toggleMute} className="muteButton">{(this.state.muteStatus) ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}</div>
                    <div className="videoDropDown">
                        <div className="buttonWrapper">
                            <span>
                                <Link to={`/videos/${this.props.video.id}`}><i className="far fa-play-circle"></i></Link>
                            </span>
                            <span>
                                {
                                    this.props.inList ?
                                    <i onClick={this.deleteListItem} className="fas fa-minus-circle"></i> :
                                    <i onClick={this.addToList} className="fas fa-plus-circle"></i>
                                }
                            </span>
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

export default VideoTile;