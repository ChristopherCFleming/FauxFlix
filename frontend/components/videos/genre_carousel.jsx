import React from 'react';

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
 
        if(Object.values(props.allVideoObjects).length) {
            return (
                <div className="carousel">
                    {shuffleVideos(props.genre.video_ids).map( (each_id, index) => (
                        <video poster={props.allVideoObjects[each_id].thumbnail} loop={true} key={index} src={props.allVideoObjects[each_id].video} width="10%" className="carouselVideo" type="video/mp4"></video>
                        ))
                    }
                </div>
            )
        } else {
            return (null);
        }

        
}
export default GenreCarousel;