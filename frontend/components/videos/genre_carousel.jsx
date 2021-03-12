import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';


function GenreCarousel(props) {

    function shuffleVideos(input) {
        for (var i = input.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        }
        return input;
    }

    function mouseover() {
        console.log("working!");
    }

    function shortenDescription(description) {
        return description.slice(0, 35) + "...";
    }

    SwiperCore.use([Navigation]);


    
    
    if (Object.values(props.allVideoObjects).length) {
            return (
                <div className="carousel" >
                    <p>{props.genre.genre}</p>
                    
                    <Swiper loop={true} navigation slidesPerView={6}>
                        {shuffleVideos(props.genre.video_ids).map( (each_id, index) => (
                            <SwiperSlide className="slide" key={index} >
                                <div className="videoSlideContainer" onMouseOver={mouseover}>
                                    <Link to={`/videos/${each_id}`}>
                                        <video 
                                            poster={props.allVideoObjects[each_id].thumbnail} 
                                            src={props.allVideoObjects[each_id].video} 
                                            className="carouselVideo" />
                                    </Link>
                                    <div className="videoDropDown">
                                        <div className="buttonWrapper">
                                            <span><Link to={`/videos/${each_id}`}><i className="far fa-play-circle"></i></Link></span>
                                            <span><i className="fas fa-plus-circle"></i></span>
                                            <h4>{props.allVideoObjects[each_id].title}</h4>
                                        </div>
                                        <p>{shortenDescription(props.allVideoObjects[each_id].description)}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))
                        }
                    </Swiper>

                   
                </div>
            )
        } else {
            return (null);
        }

        
}
export default GenreCarousel;