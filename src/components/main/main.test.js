import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';


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

const onCardTitleClick = () => {};


describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<Main
        filmsTitles={FILMS_TITLES}
        onCardTitleClick={onCardTitleClick}
        promoFilmGenre={PROMO_FILM_GENRE}
        promoFilmGenreRelease={PROMO_FILM_RELEASE}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
