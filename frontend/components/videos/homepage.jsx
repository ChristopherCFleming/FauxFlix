import React from 'react';
import Header from '../reusable_components/header_container';
import LargeVideo from './large_video_container';
import GenreCarousel from './genre_carousel_container';
import Footer from '../reusable_components/footer';
import Navi from '../reusable_components/navi';
import BannerVideo from './banner_video';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.allVideos()
        // .then(() => console.log("hi"));
    }

    render() {
        // console.log(this.props.videos)
        if (this.props.allVideosArray.length === 0) {
            return null;
        } else {

            const randNum = Math.floor(Math.random() * Math.floor(this.props.allVideosArray.length))
            const randVideo = this.props.allVideosArray[randNum]
            console.log(randVideo)
            // const allMyVideos = Object.values(this.props.videos);
            // const allVideoIds = Object.keys(this.props.videos);
            // console.log(this.props.allVideosArray)
    
            return (
                <div>
                    {/* <Header /> */}
                    <Navi logout={this.props.logout} currentUser={this.props.currentUser}/>
                    {/* <LargeVideo randVideo={randVideo}/> */}
                    <BannerVideo randVideo={randVideo} />
                    {/* <h1 className="genreCarousel">Trending</h1>
                    <h1 className="genreCarousel">Dark</h1>
                    <h1 className="genreCarousel">Comedy</h1>
                    <h1 className="genreCarousel">Sci-Fi</h1>
                    <h1 className="genreCarousel">Drama</h1>
                    <h1 className="genreCarousel">Fantasy</h1> */}
                    {["Trending", "Dark", "Comedy", "Sci-Fi", "Drama", "Fantasy"].map((genre, idx) => <GenreCarousel genreTitle={genre} key={idx} />)}

                    {/* {allMyVideos.map(
                        (video, idx) => (
                            // <p key={idx}>{video.title}</p>
                            console.log(typeof video)
                        )
                    )} */}
                    {/* {allMyVideos[1].title}  */}
                    <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                                        <Footer />
                    <Footer />
                </div>
            )
        }
    }
}

export default Homepage;