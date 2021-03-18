import React, {useState} from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import VideoTile from './video_tile';


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

    function playVideo(e) {
        e.currentTarget.play();
    }

    function stopVideo(e) {
        e.currentTarget.load(); 
    }

    function shortenDescription(description) {
        return description.slice(0, 35) + "...";
    }

      
    SwiperCore.use([Navigation]);

    
    
    if (Object.values(props.allVideoObjects).length) {
            return (


                // <div className="carousel" >
                //     <p>{props.genre.genre}</p>
                //     <Swiper id="main" loop={true} navigation slidesPerView={5} className="swiperWrapper" >
                //             <SwiperSlide key={1} >
                //                 <div className="videoSlideContainer" >
                //                     <Link to={`/videos/86`}>
                //                         <img src="https://i.insider.com/602301db67d1e300113c5217?width=700" 
                //                             className="carouselVideo" />
                //                     </Link>
                //                     <div className="videoDropDown">
                //                         <div className="buttonWrapper">
                //                             <span><Link to={`/videos/86`}><i className="far fa-play-circle"></i></Link></span>
                //                             <span><i className="fas fa-plus-circle"></i></span>
                //                             <h4>Great British Bakeoff</h4>
                //                         </div>
                //                         <p>The search for Britain's best amate...</p>
                //                     </div>
                //                 </div>
                //             </SwiperSlide>
                //              <SwiperSlide key={2} className="slide" >
                //                 <div className="videoSlideContainer" >
                //                     <Link to={`/videos/86`}>
                //                         <img src="https://i.insider.com/602301db67d1e300113c5217?width=700" 
                //                             className="carouselVideo" />
                //                     </Link>
                //                     <div className="videoDropDown">
                //                         <div className="buttonWrapper">
                //                             <span><Link to={`/videos/86`}><i className="far fa-play-circle"></i></Link></span>
                //                             <span><i className="fas fa-plus-circle"></i></span>
                //                             <h4>Great British Bakeoff</h4>
                //                         </div>
                //                         <p>The search for Britain's best amate...</p>
                //                     </div>
                //                 </div>
                //             </SwiperSlide>
                //              <SwiperSlide key={3} className="slide" >
                //                 <div className="videoSlideContainer" >
                //                     <Link to={`/videos/86`}>
                //                         <img src="https://i.insider.com/602301db67d1e300113c5217?width=700" 
                //                             className="carouselVideo" />
                //                     </Link>
                //                     <div className="videoDropDown">
                //                         <div className="buttonWrapper">
                //                             <span><Link to={`/videos/86`}><i className="far fa-play-circle"></i></Link></span>
                //                             <span><i className="fas fa-plus-circle"></i></span>
                //                             <h4>Great British Bakeoff</h4>
                //                         </div>
                //                         <p>The search for Britain's best amate...</p>
                //                     </div>
                //                 </div>
                //             </SwiperSlide>
                //     </Swiper>
                // </div>
        


                
                // Mostly Working Version Below with VideoTile component extracted:

                <div className="carousel" >
                    <p>{props.genre.genre}</p>
                    <Swiper loop={true} navigation slidesPerView={6}>
                        {shuffleVideos(props.genre.video_ids).map( (each_id, index) => (
                            <SwiperSlide className="slide" key={index} >
                                <VideoTile video={props.allVideoObjects[each_id]} />
                            </SwiperSlide>
                            ))}
                    </Swiper>
                </div>




                //Fully working, but not extracted:
                        

                // <div className="carousel" >
                //     <p>{props.genre.genre}</p>
                //     <Swiper loop={true} navigation slidesPerView={6}>
                //         {shuffleVideos(props.genre.video_ids).map( (each_id, index) => (
                //             <SwiperSlide className="slide" key={index} >
                //                 <div className="videoSlideContainer" >
                //                     <Link to={`/videos/${each_id}`}>
                //                         <video 
                //                             muted={true}
                //                             onMouseOver={playVideo} 
                //                             onMouseOut={stopVideo}
                //                             loop={true}
                //                             poster={props.allVideoObjects[each_id].thumbnail} 
                //                             src={props.allVideoObjects[each_id].video} 
                //                             className="carouselVideo" />
                //                     </Link>
                //                     <div className="videoDropDown">
                //                         <div className="buttonWrapper">
                //                             <span><Link to={`/videos/${each_id}`}><i className="far fa-play-circle"></i></Link></span>
                //                             <span><i className="fas fa-plus-circle"></i></span>
                //                             <h4>{props.allVideoObjects[each_id].title}</h4>
                //                         </div>
                //                         <p>{shortenDescription(props.allVideoObjects[each_id].description)}</p>
                //                     </div>
                //                 </div>
                //             </SwiperSlide>
                //             ))
                //         }
                //     </Swiper>
                // </div>
            )
        } else {
            return (null);
        }

        
}
export default GenreCarousel;