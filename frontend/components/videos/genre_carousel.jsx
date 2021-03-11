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

    SwiperCore.use([Navigation]);

 
        if (Object.values(props.allVideoObjects).length) {
            
            return (
                <div className="carousel">
                    <p>{props.genre.genre}</p>
                    
                    <Swiper loop={true} navigation slidesPerView={4}>
                        {shuffleVideos(props.genre.video_ids).map( (each_id, index) => (
                            <SwiperSlide className="slide" key={index} >
                                <Link to={`/videos/${each_id}`}>
                                    <video poster={props.allVideoObjects[each_id].thumbnail} 
                                        loop={true} 
                                        src={props.allVideoObjects[each_id].video} 
                                        className="carouselVideo" 
                                        type="video/mp4">
                                        alt={props.allVideoObjects[each_id].title}
                                    </video>
                                </Link>
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