import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../reusable_components/navi';
import Footer from '../reusable_components/footer';
import VideoTileContainer from '../videos/video_tile_container';


class List extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    componentDidMount() {
        //Reduce pull, will only run if lists aren't there. Come back to this.
        //If a user has no list, can return list id of -1, then if we find -1, we know they're new users
        this.props.list.length || this.props.fetchLists()
    }

    render() {
        if (!this.props.list) {
            return null;
        } else if (this.props.list.length === 0) {
            return (
                <div className="listComponent empty">
                    <Navi loggedIn={true} logout={this.props.logout}/>
                    <p>Add some videos from the <Link to="/browse">homepage</Link> to keep track of them here.</p>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="listComponent">
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

export default List;

