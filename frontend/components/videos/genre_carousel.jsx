import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';




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
                    {/* Begin Swiper Test */}
                   
                    {/* <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        ...
                    </Swiper> */}




                    {/* {shuffleVideos(props.genre.video_ids).map( (each_id, index) => (
                        <video poster={props.allVideoObjects[each_id].thumbnail} loop={true} key={index} src={props.allVideoObjects[each_id].video} width="10%" className="carouselVideo" type="video/mp4"></video>
                        ))
                    } */}
                </div>
            )
        } else {
            return (null);
        }

        
}
export default GenreCarousel;