import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const PROMO_FILM_GENRE = `Drama`;
const PROMO_FILM_RELEASE = 2010;

const FILMS_TITLES = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
];


describe(`Main e2e`, () => {
  it(`Should call onCardTitleClick 1 time`, () => {
    const onCardTitleClick = jest.fn();

    const wrapper = mount(
        <Main
          filmsTitles={FILMS_TITLES}
          onCardTitleClick={onCardTitleClick}
          promoFilmGenre={PROMO_FILM_GENRE}
          promoFilmRelease={PROMO_FILM_RELEASE}
        />
    );

    const title = wrapper.find(`.small-movie-card__link`).first();

    title.simulate(`click`, {preventDefault() {}});

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
