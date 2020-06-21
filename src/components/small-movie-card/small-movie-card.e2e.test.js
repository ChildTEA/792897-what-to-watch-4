import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});


const MOVIE = {
  title: `Title. Part 1`,
  smallCardPreview: `aviator.jpg`,
};

describe(`SmallMovieCard e2e`, () => {
  it(`Should return SmallMovieCard element`, () => {
    const onCardHover = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          title={MOVIE.title}
          preview={MOVIE.smallCardPreview}
          onCardTitleClick={() => {}}
          onCardHover={onCardHover}
        />
    );

    wrapper.simulate(`mouseenter`);

    expect(onCardHover).toHaveBeenCalledTimes(1);
  });

  it(`Should call onCardTitleClick one time`, () => {
    const onCardTitleClick = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          title={MOVIE.title}
          preview={MOVIE.smallCardPreview}
          onCardTitleClick={onCardTitleClick}
          onCardHover={() => {}}
        />
    );

    const title = wrapper.find(`.small-movie-card__link`);

    title.simulate(`click`);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
