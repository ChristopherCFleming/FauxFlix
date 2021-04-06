import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../reusable_components/navi_container';
import Footer from '../reusable_components/footer';
import VideoTileContainer from '../videos/video_tile_container';


class Search extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    componentDidMount() {
        //Reduce pull, will only run if lists aren't there. Come back to this.
        //If a user has no list, can return list id of -1, then if we find -1, we know they're new users
        this.props.list.length || this.props.fetchLists()
        Object.values(this.props.videos).length || this.props.allVideos()
    }

    render() {
        if (!Object.values(this.props.videos).length) {
            return null;
        } else if (this.props.list.length === 0) {
            return (
                <div className="listComponent empty">
                    <Navi loggedIn={true} history={this.props.history}/>
                    <p>Add some videos from the <Link to="/browse">homepage</Link> to keep track of them here.</p>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="listComponent">
                    {/* only passing logout below in case Navi is a functional component */}
                    <Navi loggedIn={true} logout={this.props.logout}/>
                    <div className="listVideosContainer">
                        {this.props.list.map((videoId, idx) => <VideoTileContainer key={idx} video={this.props.videos[videoId]} className="videoTile"/>) }
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Search;