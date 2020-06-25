import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {moviesType} from "../../types/types.js";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieID: null,
    };

    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
    this.onCardMouseLeave = this.onCardMouseLeave.bind(this);
  }

  onCardMouseEnter(movieID) {
    this.setState({activeMovieID: movieID});
  }

  onCardMouseLeave() {
    this.setState({activeMovieID: null});
  }

  render() {
    const {movies, onCardTitleClick} = this.props;
    const smallMovieCards = movies.map((movie) => {
      const id = movie.id;
      const title = movie.title;
      const preview = movie.preview;
      const videoPreviewSrc = movie.videoPreviewSrc;
      const activeMovieID = this.state.activeMovieID;

      return (
        <SmallMovieCard
          key={title}
          id={id}
          title={title}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={activeMovieID === id}
          onCardTitleClick={onCardTitleClick}
          onCardMouseEnter={this.onCardMouseEnter}
          onCardMouseLeave={this.onCardMouseLeave}
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
