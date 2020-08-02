import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
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
      return (
        <SmallMovieCardWrapped
          key={movie.name}
          id={movie.id}
          name={movie.name}
          previewImage={movie.previewImage}
          videoPreviewSrc={movie.videoPreviewSrc}
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
