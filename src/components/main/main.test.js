import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";


const PROMO_FILM = {
  genre: `Drama`,
  release: 2010,
};

const movies = [
  {
    title: `Title. Part 1`,
    smallCardPreview: `aviator.jpg`,
  },
  {
    title: `Title. Part 2`,
    smallCardPreview: `aviator.jpg`,
  },
  {
    title: `Title. Part 3`,
    smallCardPreview: `aviator.jpg`,
  },
  {
    title: `Title. Part 4`,
    smallCardPreview: `aviator.jpg`,
  },
];

const onCardTitleClick = () => {};


describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<Main
        movies={movies}
        promoFilmGenre={PROMO_FILM.genre}
        promoFilmRelease={PROMO_FILM.release}
        onCardTitleClick={onCardTitleClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
