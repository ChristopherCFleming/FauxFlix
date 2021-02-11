import React from 'react';

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h2>{`This is the ${this.props.genreTitle} Genre Carousel`}</h2>
        )
    }
}

export default GenreCarousel;