import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';



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
      
      SwiperCore.use([Navigation, Scrollbar, Controller])

        if (Object.values(this.props.allVideoObjects).length) {
          return (
            // begin experimentation:
            
                 

                <div className="carousel" >
                    <p>{this.props.genre.genre}</p>
                    <Swiper loop={true} navigation slidesPerView={6} className="swiperWrapper">
                            <SwiperSlide className="slide" >
                                <div className="videoSlideContainer" onMouseOver={this.mouseover}>
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



                    // WORKING VERSION BELOW!

                // <div className="carousel" >
                //     <p>{this.props.genre.genre}</p>
                //     <Swiper loop={true} navigation slidesPerView={6} className="swiperWrapper">
                //         {this.shuffleVideos(this.props.genre.video_ids).map( (each_id, index) => (
                //             <SwiperSlide className="slide" key={index} >
                //                 <div className="videoSlideContainer" >
                //                     <Link to={`/videos/${each_id}`}>
                //                         <video onMouseOver={this.mouseover}
                //                             poster={this.props.allVideoObjects[each_id].thumbnail}
                //                             src={this.props.allVideoObjects[each_id].video} 
                //                             className="carouselVideo" />
                //                     </Link>
                //                     <div className="videoDropDown">
                //                         <div className="buttonWrapper">
                //                             <span><Link to={`/videos/${each_id}`}><i className="far fa-play-circle"></i></Link></span>
                //                             <span><i className="fas fa-plus-circle"></i></span>
                //                             <h4>{this.props.allVideoObjects[each_id].title}</h4>
                //                         </div>
                //                         <p>{this.shortenDescription(this.props.allVideoObjects[each_id].description)}</p>
                //                     </div>
                //                 </div>
                //             </SwiperSlide>
                //             ))
                //         }
                //     </Swiper>
                // </div>


            )
        } else {
            return null;
        }
    }
}
export default GenreCarousel;