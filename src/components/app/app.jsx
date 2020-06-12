import React from 'react';
import Main from '../main/main.jsx';


const App = (props) => {
  // eslint-disable-next-line  react/prop-types
  const {promoFilmGenre, promoFilmGenreRelease} = props;

  return (
    <Main
      genre={promoFilmGenre}
      release={promoFilmGenreRelease}
    />
  );
};

export default App;
