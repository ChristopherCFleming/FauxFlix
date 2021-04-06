import React from 'react';
import { Link } from 'react-router-dom';
// below was the functional navi
// import Navi from '../reusable_components/navi';
import Navi from '../reusable_components/navi_container';
import Footer from '../reusable_components/footer';
import VideoTileContainer from '../videos/video_tile_container';


class List extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    componentDidMount() {
        //Reduce pull, will only run if lists aren't there. Come back to this.
        this.props.list.length || this.props.fetchLists()
        Object.values(this.props.videos).length || this.props.allVideos()
    }

    render() {
        if (!Object.values(this.props.videos).length) {
            return null;
        } else if (this.props.list.length === 0) {
            return (
                <div className="listComponent empty">
                    {/* passing history prop to extend React Router's history to this child component */}
                    <Navi loggedIn={true} history={this.props.history}/>
                    <p>Add some videos from the <Link to="/browse">homepage</Link> to keep track of them here.</p>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="listComponent">
                     {/* passing history prop to extend React Router's history to this child component */}
                    <Navi loggedIn={true} history={this.props.history}/>
                    <div className="listVideosContainer">
                        {this.props.list.map((videoId, idx) => <VideoTileContainer key={idx} video={this.props.videos[videoId]} className="videoTile"/>) }
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default List;

