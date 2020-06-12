import React from 'react';
import Main from '../main/main.jsx';


const App = ({promoFilmGenre, promoFilmGenreRelease, filmsTitles}) => {
  return (
    <Main
      promoFilmGenre={promoFilmGenre}
      promoFilmGenreRelease={promoFilmGenreRelease}
      filmsTitles={filmsTitles}
    />
  );
};

export default App;
