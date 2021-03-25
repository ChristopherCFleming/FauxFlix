import React, {useState} from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import VideoTile from './video_tile';
import VideoTileContainer from './video_tile_container';


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


                <div className="carousel" >
                    <p>{props.genre.genre}</p>
                    <Swiper id="main" loop={true} navigation slidesPerView={5} className="swiperWrapper" >
                            <SwiperSlide key={1} >
                                <div className="videoSlideContainer" >
                                    <Link to={`/videos/86`}>
                                        <img src="https://i.insider.com/602301db67d1e300113c5217?width=700" 
                                            className="carouselVideo" />
                                    </Link>
                                    <div className="videoDropDown">
                                        <div className="buttonWrapper">
                                            <span><Link to={`/videos/86`}><i className="far fa-play-circle"></i></Link></span>
                                            <span><i className="fas fa-plus-circle"></i></span>
                                            <h4>Great British Bakeoff</h4>
                                        </div>
                                        <p>The search for Britain's best amate...</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide key={2} className="slide" >
                                <div className="videoSlideContainer" >
                                    <Link to={`/videos/86`}>
                                        <img src="https://i.insider.com/602301db67d1e300113c5217?width=700" 
                                            className="carouselVideo" />
                                    </Link>
                                    <div className="videoDropDown">
                                        <div className="buttonWrapper">
                                            <span><Link to={`/videos/86`}><i className="far fa-play-circle"></i></Link></span>
                                            <span><i className="fas fa-plus-circle"></i></span>
                                            <h4>Great British Bakeoff</h4>
                                        </div>
                                        <p>The search for Britain's best amate...</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide key={3} className="slide" >
                                <div className="videoSlideContainer" >
                                    <Link to={`/videos/86`}>
                                        <img src="https://i.insider.com/602301db67d1e300113c5217?width=700" 
                                            className="carouselVideo" />
                                    </Link>
                                    <div className="videoDropDown">
                                        <div className="buttonWrapper">
                                            <span><Link to={`/videos/86`}><i className="far fa-play-circle"></i></Link></span>
                                            <span><i className="fas fa-plus-circle"></i></span>
                                            <h4>Great British Bakeoff</h4>
                                        </div>
                                        <p>The search for Britain's best amate...</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                </div>


                
                // Completely Working Version Below with VideoTile component extracted:

                // <div className="carousel" >
                //     <p>{props.genre.genre}</p>
                //     <Swiper loop={true} navigation slidesPerView={6}>
                //         {/* the shuffle function below keeps rerendering all the videos when I add them to my list */}
                //         {/* {shuffleVideos(props.genre.video_ids).map( (each_id, index) => ( */}
                //         {props.genre.video_ids.map( (each_id, index) => (
                //             <SwiperSlide className="slide" key={index} >
                //                 <VideoTileContainer video={props.allVideoObjects[each_id]} className="videoTile" />
                //             </SwiperSlide>
                //             ))}
                //     </Swiper>
                // </div>

            )
        } else {
            return (null);
        }

        
}
export default GenreCarousel;