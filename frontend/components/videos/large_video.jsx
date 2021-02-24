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
        // const michelle = this.props.videos[35];
        //   const videoParagraphs = Object.values(this.props.videos);

        if (!this.props.videos) {
            return null;
        } else { 
            return (
                <div>
                    <h1>This is the Large Video Component</h1>
                    <video muted width="100%" autoplay="autoplay" loop="loop" height="50%" className="banner">
                        <source src={this.props.randVideo.video} type="video/mp4"/>
                    </video>
                    {/* <p>{videoParagraphs[0].title}</p> */}
                </div>
                
    
            )
        }
    }
}

export default LargeVideo;
