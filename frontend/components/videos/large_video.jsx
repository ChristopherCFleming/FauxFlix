import React from 'react';

class LargeVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    // The code below always breaks the whole app.... it is duplicated in the homepage.jsx, but why does it cause this problem? 
    // componentDidMount() {
    //     this.props.allVideos();
    // }

    render() {
        if (!this.props.randVideo) {
            return null;
        } else { 
            return (
                <div>
                    <video width="100%" autoPlay={true} loop={true} height="50%" controls={true} className="banner">
                        <source src={this.props.randVideo.video} type="video/mp4"/>
                    </video>
                    {/* <p>{videoParagraphs[0].title}</p> */}
                </div>
                
    
            )
        }
    }
}

export default LargeVideo;
