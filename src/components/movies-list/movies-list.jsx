import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {moviesType} from "../../types/types.js";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null,
    };

    this.onCardHover = this.onCardHover.bind(this);
  }

  onCardHover(evt) {
    const target = evt.target;

    this.setState(() => {
      return {
        activeMovieCard: target,
      };
    });
  }

  onMouseLeave() {
    return ``;
  }

  render() {
    const {movies, onCardTitleClick} = this.props;
    const smallMovieCards = movies.map((movie) => {
      const id = movie.id;
      const title = movie.title;
      const preview = movie.preview;
      const videoPreviewSrc = movie.videoPreviewSrc;

      return (
        <SmallMovieCard
          key={title}
          id={id}
          title={title}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          onCardTitleClick={onCardTitleClick}
          onCardHover={this.onCardHover}
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
  onCardTitleClick: PropTypes.func.isRequired,
};


export default MoviesList;
