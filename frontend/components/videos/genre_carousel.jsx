import React from 'react';

function GenreCarousel(props) {
 
        if(!Object.values(props.allVideoObjects).length) {
            return (null);
        } else {
            return (
                <div className="carousel">
                   
                    {/* {props.genre.video_ids.map( (video_id_in_genre, idx) =>  */}
                    {/* // <video muted={true} controls={false} autoPlay={false} loop={true} src={props.videos[video_id_in_genre].video} width="10%" className="carouselVideo" type="video/mp4"></video>)} */}
                    {props.genre.video_ids.map( (each_id, index) => console.log(props.allVideoObjects[each_id].video))}

                </div>
            )
        }

        
}
export default GenreCarousel;