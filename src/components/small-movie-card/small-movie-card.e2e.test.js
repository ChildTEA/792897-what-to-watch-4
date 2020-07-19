import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import React from "react";
import SmallMovieCard from "./small-movie-card.jsx";
import {fullMovieDescription} from "../../const/tests.js";


Enzyme.configure({
  adapter: new Adapter(),
});


const {id, name} = fullMovieDescription;


describe(`SmallMovieCard e2e`, () => {
  it(`Should call mouseEnter and mouseLeave callbacks one time`, () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();


    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          name={name}
          onActivation={onMouseEnter}
          onCardClick={() => {}}
          onDeactivation={onMouseLeave}
        >
          <video />
        </SmallMovieCard>
    );

    wrapper.simulate(`mouseenter`);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(0);

    wrapper.simulate(`mouseleave`);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });


  it(`Should call onCardClick one time`, () => {
    const onCardClick = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          name={name}
          onActivation={() => {}}
          onCardClick={onCardClick}
          onDeactivation={() => {}}
        >
          <video />
        </SmallMovieCard>
    );

    const movieCardTitle = wrapper.find(`.small-movie-card__link`);

    movieCardTitle.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(1);

    const movieCardImage = wrapper.find(`.small-movie-card__image`);
    movieCardImage.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(2);
  });
});
