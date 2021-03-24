import React, {useState} from 'react';
import { Link } from 'react-router-dom';


class VideoTile extends React.Component {
    constructor(props) {
        super(props)
        this.videoElement = React.createRef();
        this.state = {
            muteStatus : true,
        };
        this.playVideo = this.playVideo.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.shortenDescription = this.shortenDescription.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        //these two are new: 
        this.addToList = this.addToList.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
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
            user_id: this.props.entities.users.id,
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