import React from 'react';
// below this is the functional version:
import GenreCarousel from './genre_carousel';
// below this is the class version: 
// import GenreCarousel from './genre_carousel_container';
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
                    <Navi logout={this.props.logout} currentUser={true} homepage={true} />
                    {/* <BannerVideo randVideo={randVideo} /> */}
                    {/* below this is the functional version I hoped would work */}
                    <div className="carouselWrapper">
                        {this.props.allGenresArray.map((genre, idx) => <GenreCarousel genre={genre} key={idx} allVideoObjects={this.props.videos}/>)}
                        {/* below this is the mini version */}
                        {/* <GenreCarousel genre={this.props.allGenresArray[7]} key={7} allVideoObjects={this.props.videos} /> */}

                    </div>

                    <Footer />
                </div>
            )
        }
    }
}

export default Homepage;