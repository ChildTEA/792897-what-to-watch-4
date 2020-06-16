import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import React from 'react';


const onCardTitleClick = (evt) => {
  evt.preventDefault();
};


const App = ({
  filmsTitles,
  promoFilmGenre,
  promoFilmRelease
}) => {
  return (
    <Main
      filmsTitles={filmsTitles}
      onCardTitleClick={onCardTitleClick}
      promoFilmGenre={promoFilmGenre}
      promoFilmRelease={promoFilmRelease}
    />
  );
};

App.propTypes = {
  promoFilmGenre: PropTypes.string.isRequired,
  promoFilmRelease: PropTypes.number.isRequired,
  filmsTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
