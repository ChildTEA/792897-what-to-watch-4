import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const promoFilm = {
  genre: `Drama`,
  release: `2014`,
};

const FILMS_TITLES = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
];

ReactDOM.render(
    <App
      promoFilmGenre={promoFilm.genre}
      promoFilmGenreRelease={promoFilm.release}
      filmsTitles={FILMS_TITLES}
    />,
    document.querySelector(`#root`)
);
