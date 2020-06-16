import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import React from 'react';


const onCardTitleClick = (evt) => {
  evt.preventDefault();
};


const App = ({
  filmsTitles,
  promoFilmGenre,
  promoFilmGenreRelease
}) => {
  return (
    <Main
      filmsTitles={filmsTitles}
      onCardTitleClick={onCardTitleClick}
      promoFilmGenre={promoFilmGenre}
      promoFilmGenreRelease={promoFilmGenreRelease}
    />
  );
};

App.propTypes = {
  promoFilmGenre: PropTypes.string.isRequired,
  promoFilmGenreRelease: PropTypes.number.isRequired,
  filmsTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
