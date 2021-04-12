import React from 'react';
import GenreCarousel from '../genre_carousel/genre_carousel';
import Footer from '../footer/footer';
import Navi from '../navi/navi_container';
import BannerVideo from '../videos/banner_video';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //Come back to this
        this.props.allVideos()
        this.props.allGenres()
        this.props.fetchLists()
    }


    render() {

        if (!this.props.videos) {
            return null;
        } else {
            const randVideo = this.props.allVideosArray[0];

            return (
                <div>
                    <Navi loggedIn={true} homepage={true}/>
                    <BannerVideo 
                        randVideo={randVideo} 
                        list={this.props.list} 
                        addToList={this.props.addToList} 
                        deleteListItem={this.props.deleteListItem} 
                        userId={this.props.userId}
                    />
                    <div className="carouselWrapper">
                        {this.props.allGenresArray.map((genre, idx) => <GenreCarousel genre={genre} key={idx} allVideoObjects={this.props.videos}/>)}
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Homepage;