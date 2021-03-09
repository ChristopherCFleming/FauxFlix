import React from 'react';
import Footer from '../reusable_components/footer';
import Navi from '../reusable_components/navi';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.showVideo(this.props.id);
    }

    render() {
        if (this.props.video) {
            return (
                <div className="videoShowWrapper">
                    <Navi videoShow={true}/>
                    <video muted={false} controls={true} autoPlay={true} loop={true} src={this.props.video.video} width="100%" height="50%" className="videoShow" type="video/mp4"></video>
                </div>
            )
        } else { 
            console.log("Nothing to render...");
            return null;
        }
    }
}

export default VideoShow;