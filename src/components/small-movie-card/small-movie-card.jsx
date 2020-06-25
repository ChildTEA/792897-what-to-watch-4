import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {
      id,
      title,
      preview,
      videoPreviewSrc,
      onCardTitleClick,
      // onCardHover,
      // onMouseLeave,
    } = this.props;

    return (
      <article
        onMouseEnter={() => this.setState({isPlaying: true})}
        onMouseLeave={() => this.setState({isPlaying: false})}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isPlaying}
            preview={preview}
            videoPreviewSrc={videoPreviewSrc}
          />

          {/*
          <img
            src={`img/${preview}`}
            alt={title}
            width="280"
            height="175"
          />
          */}
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick={onCardTitleClick}
            className="small-movie-card__link"
            href="movie-page.html"
            data-id={id}
          >
            {title}
          </a>
        </h3>
      </article>
    );
  }
}


MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.PropTypes.string.isRequired,
  videoPreviewSrc: PropTypes.string.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  // onCardHover: PropTypes.func.isRequired,
  // onMouseLeave: PropTypes.func.isRequired,
};


export default MovieCard;
