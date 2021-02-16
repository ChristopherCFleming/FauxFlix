import React from 'react';

class LargeVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.allVideos();
    }

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


 if (!this.props.videos) {
            return null;
        } else { 
        }