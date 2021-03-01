import React from 'react';

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.allVideosArray.length === 0) {
            return null;
        } else {
            return (
                <div className="carousel">
                    <h2>{this.props.genre.genre}</h2>
                    {this.props.genre.video_ids.map( (each_id, index) => (
                        <video thumbnail={this.props.videos[each_id].thumbnail} loop={true} key={index} src={this.props.videos[each_id].video} width="10%" className="carouselVideo" type="video/mp4"></video>
                        ))
                    }
                </div>

            )
        }
    }
}
export default GenreCarousel;