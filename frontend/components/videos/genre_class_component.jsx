import React from 'react';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';


class GenreCarousel extends React.Component {
    constructor(props) {
        super(props);
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            slidesPerView: 4,
            loop: true,
            spaceBetween: 30,
            clickable: true,

            // Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
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

    render() {
        if (this.props.allVideosArray.length === 0) {
            return null;
        } else {
            return (
                <div className="carousel">
                    <h2>{this.props.genre.genre}</h2>

                        {/* Begin Swiper Test */}

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">Slide 1</div>
                                <div class="swiper-slide">Slide 2</div>
                                <div class="swiper-slide">Slide 3</div>
                                <div class="swiper-slide">Slide 4</div>
                                <div class="swiper-slide">Slide 5</div>
                                <div class="swiper-slide">Slide 6</div>
                                <div class="swiper-slide">Slide 7</div>
                                <div class="swiper-slide">Slide 8</div>
                                <div class="swiper-slide">Slide 9</div>
                                <div class="swiper-slide">Slide 10</div>
                            </div>
                        </div>





                    {/* {this.shuffleVideos(this.props.genre.video_ids).map( (each_id, index) => (
                        <video poster={this.props.videos[each_id].thumbnail} loop={true} key={index} src={this.props.videos[each_id].video} width="10%" className="carouselVideo" type="video/mp4"></video>
                        ))
                    } */}
                </div>

            )
        }
    }
}
export default GenreCarousel;