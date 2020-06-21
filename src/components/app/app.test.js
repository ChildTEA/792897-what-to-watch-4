import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";


const PROMO_FILM = {
  genre: `Drama`,
  release: 2010,
};


describe(`<App />`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        promoFilmGenre={PROMO_FILM.genre}
        promoFilmRelease={PROMO_FILM.release}
        movies={fullMoviesDescriptions}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
