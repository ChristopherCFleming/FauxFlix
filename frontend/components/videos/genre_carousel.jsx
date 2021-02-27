import React from 'react';

function GenreCarousel(props) {

    return (
        <div className="carousel">
            <h1>Hey!</h1>
            <h2>{`This is the ${props.genre.genre} Genre Carousel`}</h2>
        </div>
    )
        
}
export default GenreCarousel;