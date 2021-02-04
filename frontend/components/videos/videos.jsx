import React from 'react';

class Videos extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.allVideos();
    }

    render() {

        if (!this.props.videos) {
            return null;
        } else {
            const VideoParagraphs = Object.values(this.props.videos);
    
            return (
                <div>
                    <p>This Would display my videos!</p>
                    {VideoParagraphs.map(
                        (video, idx) => (
                            <p key={idx}>{video.title}</p>
                        )
                    )}
                </div>
            )
        }
    }
}

export default Videos;