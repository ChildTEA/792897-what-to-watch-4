import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import PropTypes from 'prop-types';
import React from 'react';


const MoviesList = ({
  movies,
  onCardTitleClick
}) => {
  const smallMovieCards = movies.map((movie) => {
    const title = movie.title;
    const preview = movie.smallCardPreview;

    return (
      <SmallMovieCard
        key={title}
        title={title}
        preview={preview}
        onCardTitleClick={onCardTitleClick}
      />);
  });

  return (<React.Fragment>
    <div className="catalog__movies-list">
      {smallMovieCards}
    </div>
  </React.Fragment>);
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    smallCardPreview: PropTypes.string.isRequired
  })).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};


export default MoviesList;
