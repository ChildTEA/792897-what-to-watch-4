import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import React from 'react';


const App = ({promoFilmGenre, promoFilmGenreRelease, filmsTitles}) => {
  return (
    <Main
      promoFilmGenre={promoFilmGenre}
      promoFilmGenreRelease={promoFilmGenreRelease}
      filmsTitles={filmsTitles}
    />
  );
};

App.propTypes = {
  promoFilmGenre: PropTypes.string.isRequired,
  promoFilmGenreRelease: PropTypes.number.isRequired,
  filmsTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
