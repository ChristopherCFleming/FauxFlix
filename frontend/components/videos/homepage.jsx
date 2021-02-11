import React from 'react';
import Header from '../reusable_components/header';
import LargeVideo from './large_video_container';
import GenreCarousel from './genre_carousel_container';
import Footer from '../reusable_components/footer';

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
                    <LargeVideo />
                    {/* <h1 className="genreCarousel">Trending</h1>
                    <h1 className="genreCarousel">Dark</h1>
                    <h1 className="genreCarousel">Comedy</h1>
                    <h1 className="genreCarousel">Sci-Fi</h1>
                    <h1 className="genreCarousel">Drama</h1>
                    <h1 className="genreCarousel">Fantasy</h1> */}
                    {["Trending", "Dark", "Comedy", "Sci-Fi", "Drama", "Fantasy"].map(genre => <GenreCarousel genreTitle={genre} />)}

                    {/* {VideoParagraphs.map(
                        (video, idx) => (
                            <p key={idx}>{video.title}</p>
                        )
                    )} */}
                    <Footer />
                </div>
            )
        }
    }
}

export default Homepage;