import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../reusable_components/navi_container';
import Footer from '../reusable_components/footer';
import VideoTileContainer from '../videos/video_tile_container';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: window.location.href.split("query=")[1],
        }
        
    }

    
    componentDidMount() {
        //Reduce pull, will only run if videos aren't there.
        Object.values(this.props.videos).length || this.props.allVideos()
    }

    render() {
        if (!Object.values(this.props.videos).length) {
            return null;
        } else if (this.props.videos) {
            return (
                <div className="listComponent empty">
                    {/* Passing history as a prop to allow Navi the same react router ability*/}
                    <Navi loggedIn={true} history={this.props.history}/>
                    <p>Your search for "{this.state.query}" returned no results.</p>
                    <ul className="suggestionsList">Suggestions:
                        <li className="suggestion">Search for a title</li>
                        <li className="suggestion">Try keywords from a video's description</li>
                        <li className="suggestion">Type "The Chilling Adventures of Sabrina" because it's an amazing series</li>
                        <li className="suggestion">Hire me as a thank you for introducing you to "The Chilling Adventures of Sabrina"</li>
                        <li className="suggestion">Hire me if you don't like the series because you got a chuckle out of this</li>
                        <li className="suggestion">In case none of the above apply: hire me anyways</li>
                    </ul>

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