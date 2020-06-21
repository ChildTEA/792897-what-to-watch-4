import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


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

describe(`<App />`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        promoFilmGenre={PROMO_FILM.genre}
        promoFilmRelease={PROMO_FILM.release}
        movies={movies}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
