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
    const movieTitle = MOVIE.title;
    const cardPreview = MOVIE.smallCardPreview;
    const onCardHover = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          title={movieTitle}
          preview={cardPreview}
          onCardTitleClick={() => {}}
          onCardHover={onCardHover}
        />
    );

    wrapper.simulate(`mouseover`);

    expect(onCardHover).toHaveBeenCalledTimes(1);
  });
});
