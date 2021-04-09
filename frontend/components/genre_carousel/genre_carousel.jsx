import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import VideoTileContainer from '../video_tile/video_tile_container';


function GenreCarousel(props) {

    SwiperCore.use([Navigation]);
    
    if (Object.values(props.allVideoObjects).length) {
        return (
            <div className="carousel" >
                <p>{props.genre.genre}</p>
                <Swiper loop={true} navigation slidesPerView={6}>
                    {props.genre.videoIds.map( (each_id, index) => (
                        <SwiperSlide className="slide" key={index} >
                            <VideoTileContainer video={props.allVideoObjects[each_id]} className="videoTile" />
                        </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        )
    } else {
        return (null);
    }  
}
export default GenreCarousel;