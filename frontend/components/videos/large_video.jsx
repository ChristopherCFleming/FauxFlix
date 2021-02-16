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
        if (!this.props.videos) {
            return null;
        } else { 
            return (
                <h1>This is the Large Video Component</h1>
    
            )
        }
    }
}

export default LargeVideo;
