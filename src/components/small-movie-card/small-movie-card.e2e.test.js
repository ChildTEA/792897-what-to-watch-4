import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import React from "react";
import SmallMovieCard from "./small-movie-card.jsx";
import {shortMovieDescription} from "../../const/tests.js";


Enzyme.configure({
  adapter: new Adapter(),
});


const {id, title, preview, videoPreviewSrc} = shortMovieDescription;


describe(`SmallMovieCard e2e`, () => {
  it(`Should call mouseEnter and mouseLeave callbacks one time`, () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();


    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          title={title}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={false}
          onActivation={onMouseEnter}
          onCardTitleClick={() => {}}
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


  it(`Should call onCardTitleClick one time`, () => {
    const onCardTitleClick = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          title={title}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={false}
          onActivation={() => {}}
          onCardTitleClick={onCardTitleClick}
          onDeactivation={() => {}}
        >
          <video />
        </SmallMovieCard>
    );

    const movieCardTitle = wrapper.find(`.small-movie-card__link`);

    movieCardTitle.simulate(`click`);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
