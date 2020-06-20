import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import React from 'react';


const onCardTitleClick = (evt) => {
  evt.preventDefault();
};


const App = ({
  movies,
  promoFilmGenre,
  promoFilmRelease
}) => {
  return (
    <Main
      movies={movies}
      onCardTitleClick={onCardTitleClick}
      promoFilmGenre={promoFilmGenre}
      promoFilmRelease={promoFilmRelease}
    />
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    smallCardPreview: PropTypes.string.isRequired
  })).isRequired,
  promoFilmGenre: PropTypes.string.isRequired,
  promoFilmRelease: PropTypes.number.isRequired,
};

export default App;
