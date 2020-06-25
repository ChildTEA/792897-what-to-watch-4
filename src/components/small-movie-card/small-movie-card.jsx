import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      preview,
      videoPreviewSrc,
      isPlaying,
      onCardTitleClick,
      onCardMouseEnter,
      onCardMouseLeave,
    } = this.props;

    return (
      <article
        onMouseEnter={() => {
          onCardMouseEnter(id);
        }}
        onMouseLeave={onCardMouseLeave}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={isPlaying}
            preview={preview}
            videoPreviewSrc={videoPreviewSrc}
          />
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
  isPlaying: PropTypes.bool.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
};


export default MovieCard;
