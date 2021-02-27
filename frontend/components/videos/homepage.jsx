import React from 'react';
import Header from '../reusable_components/header_container';
import LargeVideo from './large_video_container';
import GenreCarousel from './genre_carousel';
import Footer from '../reusable_components/footer';
import Navi from '../reusable_components/navi';
import BannerVideo from './banner_video';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.allVideos()
        this.props.allGenres()
        // .then(() => console.log("hi"));
    }


    render() {

        if (!this.props.videos) {
            return null;
        } else {

            const randNum = Math.floor(Math.random() * Math.floor(this.props.allVideosArray.length))
            const randVideo = this.props.allVideosArray[randNum]
  
    
            return (
                <div>
                    <Navi logout={this.props.logout} currentUser={this.props.currentUser}/>
                    {/* <BannerVideo randVideo={randVideo} /> */}
                    {this.props.allGenresArray.map((genre, idx) => <GenreCarousel genre={genre} key={idx} videos={this.props.videos}/>)}
                    <Footer />
                </div>
            )
        }
    }
}

export default Homepage;