import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";


Enzyme.configure({
  adapter: new Adapter(),
});

const PROMO_FILM = {
  genre: `Drama`,
  release: 2010,
};


describe(`Main e2e`, () => {
  it(`Should call onCardTitleClick one time`, () => {
    const onCardTitleClick = jest.fn();

    const wrapper = mount(
        <Main
          movies={fullMoviesDescriptions}
          promoFilmGenre={PROMO_FILM.genre}
          promoFilmRelease={PROMO_FILM.release}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const title = wrapper.find(`.small-movie-card__link`).first();

    title.simulate(`click`, {preventDefault() {}});

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
