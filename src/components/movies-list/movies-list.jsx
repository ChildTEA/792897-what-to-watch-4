import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {moviesType} from "../../types/types.js";
import withVideo from "../../hocs/with-video/with-video.js";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.js";


const SmallMovieCardWrapped = withActivePlayer(withVideo(SmallMovieCard));


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      movies,
      onCardClick,
    } = this.props;
    const smallMovieCards = movies.map((movie) => {
      const id = movie.id;
      const name = movie.name;
      const previewImage = movie.previewImage;
      const videoPreviewSrc = movie.videoPreviewSrc;

      return (
        <SmallMovieCardWrapped
          key={name}
          id={id}
          name={name}
          previewImage={previewImage}
          videoPreviewSrc={videoPreviewSrc}
          onCardClick={onCardClick}
        />
      );
    });

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {smallMovieCards}
        </div>
      </React.Fragment>
    );
  }
}


MoviesList.propTypes = {
  movies: moviesType.isRequired,
  onCardClick: PropTypes.func.isRequired,
};


export default MoviesList;
