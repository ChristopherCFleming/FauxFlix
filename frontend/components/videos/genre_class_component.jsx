import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';


class GenreCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.allVideos()
        this.props.allGenres()
    }

    shuffleVideos(input) {
        for (var i = input.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        }
        return input;
    }

    mouseover() {
        console.log("working!");
    }

    shortenDescription(description) {
        return description.slice(0, 35) + "...";
    }


    render() {
        SwiperCore.use([Navigation]);
        if (Object.values(this.props.allVideoObjects).length) {

            return (
                <div className="carousel" >
                    <p>{this.props.genre.genre}</p>
                    
                    <Swiper loop={true} navigation slidesPerView={6}>
                        {this.shuffleVideos(this.props.genre.video_ids).map( (each_id, index) => (
                            <SwiperSlide className="slide" key={index} >
                                <div className="videoSlideContainer" onMouseOver={this.mouseover}>
                                    <Link to={`/videos/${each_id}`}>
                                        <video 
                                            poster={this.props.allVideoObjects[each_id].thumbnail}
                                            // poster={this.props.entities.videos[each_id].thumbnail} 
                                            src={this.props.allVideoObjects[each_id].video} 
                                            // src={this.props.entities.videos[each_id].video} 
                                            className="carouselVideo" />
                                    </Link>
                                    <div className="videoDropDown">
                                        <div className="buttonWrapper">
                                            <span><Link to={`/videos/${each_id}`}><i className="far fa-play-circle"></i></Link></span>
                                            <span><i className="fas fa-plus-circle"></i></span>
                                            <h4>{this.props.allVideoObjects[each_id].title}</h4>
                                            {/* <h4>{this.props.entities.videos[each_id].title}</h4> */}
                                        </div>
                                        <p>{this.shortenDescription(this.props.allVideoObjects[each_id].description)}</p>
                                        {/* <p>{this.shortenDescription(this.props.entities.videos[each_id].description)}</p> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            )
        } else {
            return null;
        }
    }
}
export default GenreCarousel;