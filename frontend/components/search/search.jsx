import React from 'react';
import Navi from '../navi/navi_container';
import Footer from '../footer/footer';
import VideoTileContainer from '../video_tile/video_tile_container';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVideos: [],
        }
        this.filterMovies = this.filterMovies.bind(this);
    }

    filterMovies() {
        const vids = this.props.videosArray;
        const query = this.props.query.toLowerCase();

        
        let filtered = [];
        for (let i = 0; i < vids.length; i++) {
            if (vids[i].title.toLowerCase().includes(query) || vids[i].description.toLowerCase().includes(query)) {
                filtered.push(vids[i]);
            }
        }
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
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.query !== prevProps.query) {
            this.filterMovies();
        }
         if (this.props.videosArray.length !== prevProps.videosArray.length) {
            this.filterMovies();
        } 
    }




    render() {
        if (!this.props.videosArray.length) {
            return null;
        } else if (this.state.searchVideos.length === 0) {
            return (
                <div className="emptySearch">
                    <Navi loggedIn={true} />
                    <div className="textContainer">
                        <h1 className="emptySearchTitle">Your search for "{this.props.query}" returned no results.</h1>
                        <div className="suggestionsContainer">
                            <ul className="suggestionsList">Suggestions:
                                <li className="suggestion">Try keyword from title or description</li>
                                <li className="suggestion">Type "Sabrina" (spectacular series!)</li>
                                <li className="suggestion">Hire me for introducing you to "The Chilling Adventures of Sabrina"</li>
                                <li className="suggestion">In case of none of the above: hire me anyways</li>
                            </ul>
                        </div>
                    </div>
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