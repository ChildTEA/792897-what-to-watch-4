import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const promoFilm = {
  genre: `Drama`,
  release: `2014`,
};

ReactDOM.render(
    <App
      promoFilmGenre={promoFilm.genre}
      promoFilmGenreRelease={promoFilm.release}
    />,
    document.querySelector(`#root`)
);
