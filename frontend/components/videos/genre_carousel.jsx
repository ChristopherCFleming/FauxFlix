import React from 'react';

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="carousel">
                <h1>Hey!</h1>
                <h2>{`This is the ${this.props.genre.genre} Genre Carousel`}</h2>
            </div>
        )
    }
}

export default GenreCarousel;