import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';


const PROMO_FILM_GENRE = `Drama`;
const PROMO_FILM_RELEASE = 2010;

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

describe(`<App />`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        promoFilmGenre={PROMO_FILM_GENRE}
        promoFilmGenreRelease={PROMO_FILM_RELEASE}
        filmsTitles={FILMS_TITLES}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
