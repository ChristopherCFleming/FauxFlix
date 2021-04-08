import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../reusable_components/navi_container';
import Footer from '../reusable_components/footer';
import VideoTileContainer from '../videos/video_tile_container';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: window.location.href.split("q=")[1],
            searchVideos: [],
        }
        this.filterMovies = this.filterMovies.bind(this);
    }

    filterMovies() {
        const vids = this.props.videosArray;
        const query = this.state.query.toLowerCase();
        let filtered = [];
        for (let i = 0; i < vids.length; i++) {
            if (vids[i].title.toLowerCase().includes(query) || vids[i].description.toLowerCase().includes(query)) {
                filtered.push(vids[i]);
            }
        }
        debugger;
        this.setState({
            searchVideos: filtered
        });
    }

    componentDidMount() {
        // Reduce pull, will only run if videos aren't there.
        if (this.props.videosArray.length === 0) {
            this.props.allVideos();
        }
        this.filterMovies();

        // this.props.allVideos()
        // .then(this.filterMovies())
    }



    render() {
        if (!this.props.videosArray.length) {
            return null;
        } else if (this.state.searchVideos.length === 0) {
            return (
                <div className="listComponent empty">
                    {/* Passing history as a prop to allow Navi the same react router ability*/}
                    <Navi loggedIn={true} history={this.props.history}/>
                    <p>Your search for "{this.state.query}" returned no results.</p>
                    <ul className="suggestionsList">Suggestions:
                        <li className="suggestion">Search for a title</li>
                        <li className="suggestion">Type "Sabrina" because The Chilling Adventures of Sabrina is an amazing series</li>
                        <li className="suggestion">Hire me for introducing you to "The Chilling Adventures of Sabrina"</li>
                        <li className="suggestion">If you don't like the series, hire me because you got a chuckle out of this</li>
                        <li className="suggestion">In case none of the above apply: hire me anyways</li>
                    </ul>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="listComponent">
                    <Navi loggedIn={true} />
                    <div className="listVideosContainer">
                        {this.state.searchVideos.map((video, idx) => <VideoTileContainer key={idx} video={video} className="videoTile"/>) }
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Search;