import React from 'react';
import Header from '../reusable_components/header_container';
// below this is the functional version:
// import GenreCarousel from './genre_carousel';
// below this is the class version: 
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
        this.props.allGenres()
    }


    render() {

        if (!this.props.videos) {
            return null;
        } else {
            const randVideo = this.props.allVideosArray[0];

            return (
                <div>
                    <Navi logout={this.props.logout} currentUser={this.props.currentUser}/>
                    <BannerVideo randVideo={randVideo} />
                    {/* below this is the functional version I hoped would work */}
                    <div className="carouselWrapper">
                        {/* {this.props.allGenresArray.map((genre, idx) => <GenreCarousel genre={genre} key={idx} allVideoObjects={this.props.videos}/>)} */}
                        {/* below this is the class component */}
                        {this.props.allGenresArray.map((genre, idx) => <GenreCarousel genre={genre} key={idx} allVideoObjects={this.props.videos}/>)}
                    </div>

                    <Footer />
                </div>
            )
        }
    }
}

export default Homepage;