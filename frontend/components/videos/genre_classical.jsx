import React from 'react';

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    shuffleArray(input) {
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
<<<<<<< HEAD
                    {this.props.genre.video_ids.map( (each_id, index) => (
                        <video thumbnail={this.props.videos[each_id].thumbnail} loop={true} key={index} src={this.props.videos[each_id].video} width="10%" className="carouselVideo" type="video/mp4"></video>
=======
                    {this.shuffleArray(this.props.genre.video_ids).map( (each_id, index) => (
                        <video poster={this.props.videos[each_id].thumbnail} loop={true} key={index} src={this.props.videos[each_id].video} width="10%" className="carouselVideo" type="video/mp4"></video>
>>>>>>> workingBranch
                        ))
                    }
                </div>

            )
        }
    }
}
export default GenreCarousel;