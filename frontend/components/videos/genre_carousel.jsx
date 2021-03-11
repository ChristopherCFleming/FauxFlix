import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
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

 
        if (Object.values(props.allVideoObjects).length) {
            return (
                <div className="carousel">
                    <p>{props.genre.genre}</p>
                    
                    <Swiper loop={true} slidesPerView={4} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')}>
                        {shuffleVideos(props.genre.video_ids).map( (each_id, index) => (
                            <SwiperSlide>
                                <Link to={`/videos/${each_id}`}>
                                    <video poster={props.allVideoObjects[each_id].thumbnail} 
                                        loop={true} 
                                        key={index} 
                                        src={props.allVideoObjects[each_id].video} 
                                        className="carouselVideo" 
                                        type="video/mp4">
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