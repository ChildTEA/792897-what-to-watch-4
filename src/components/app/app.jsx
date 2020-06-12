import React from 'react';
import Main from '../main/main.jsx';

// eslint-disable-next-line  react/prop-types
const App = ({promoFilmGenre, promoFilmGenreRelease}) => {
  return (
    <Main
      genre={promoFilmGenre}
      release={promoFilmGenreRelease}
    />
  );
};

export default App;
