import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";


class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this._onCardMouseEnter = this._onCardMouseEnter.bind(this);
    this._onCardMouseLeave = this._onCardMouseLeave.bind(this);
  }

  _onCardMouseEnter() {
    this.setState({isActive: true});
  }

  _onCardMouseLeave() {
    this.setState({isActive: false});
  }

  render() {
    const {
      id,
      title,
      preview,
      videoPreviewSrc,
      onCardTitleClick,
    } = this.props;

    return (
      <article
        onMouseEnter={this._onCardMouseEnter}
        onMouseLeave={this._onCardMouseLeave}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isActive}
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


SmallMovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.PropTypes.string.isRequired,
  videoPreviewSrc: PropTypes.string.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};


export default SmallMovieCard;
