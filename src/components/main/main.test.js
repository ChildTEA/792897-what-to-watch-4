import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";


const PROMO_FILM = {
  genre: `Drama`,
  release: 2010,
};


const onCardTitleClick = () => {};


describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<Main
        movies={fullMoviesDescriptions}
        promoFilmGenre={PROMO_FILM.genre}
        promoFilmRelease={PROMO_FILM.release}
        onCardTitleClick={onCardTitleClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
