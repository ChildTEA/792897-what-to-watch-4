import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

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


describe(`Main e2e`, () => {
  it(`Should call onCardTitleClick one time`, () => {
    const onCardTitleClick = jest.fn();

    const wrapper = mount(
        <Main
          movies={movies}
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
