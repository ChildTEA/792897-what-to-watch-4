import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";
import {shortMovieDescription} from "../../const/tests.js";


Enzyme.configure({
  adapter: new Adapter(),
});


const {id, title, preview} = shortMovieDescription;


describe(`SmallMovieCard e2e`, () => {
  it(`Should return SmallMovieCard element`, () => {
    const onCardHover = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          title={title}
          preview={preview}
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
          id={id}
          title={title}
          preview={preview}
          onCardTitleClick={onCardTitleClick}
          onCardHover={() => {}}
        />
    );

    const movieCardTitle = wrapper.find(`.small-movie-card__link`);

    movieCardTitle.simulate(`click`);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
