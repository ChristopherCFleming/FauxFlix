import React from 'react';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.showVideo(this.props.id);
    }

    render() {

        let justHidden = false;
        
        function hide() {
            $('.naviElements').addClass('hidden');
        }

        $(document).ready(() => {
            let j;
            $(document).mousemove(() => {
                if (!justHidden) {
                    justHidden = false;
                    clearTimeout(j);
                    $('.naviElements').removeClass('hidden');
                    j = setTimeout(hide, 2500);
                }
            });
        });

        if (this.props.video) {
            return (
                <div className="videoShowWrapper">
                    <div className="videoShowNaviContainer">
                        <Link to="/browse">
                            <div className="naviElements">
                                <i className="fas fa-arrow-left"></i>
                                <p>Back to Browse</p>
                            </div>
                        </Link>
                    </div>
                    <video 
                        muted={false} 
                        controls={true} 
                        autoPlay={true} 
                        loop={true} 
                        src={this.props.video.video} 
                        width="100%" 
                        height="50%" 
                        className="videoShow" 
                        type="video/mp4">
                    </video>
                    <Footer />
                </div>
            )
        } else { 
            console.log("Nothing to render...");
            return null;
        }
    }
}

export default VideoShow;