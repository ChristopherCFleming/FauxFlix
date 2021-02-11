import React from 'react';
import Header from '../reusable_components/header';

class Homepage extends React.Component {
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
                    <Header />
                    
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

export default Homepage;