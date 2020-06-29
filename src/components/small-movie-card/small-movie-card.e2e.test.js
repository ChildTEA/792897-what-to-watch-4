import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";
import {shortMovieDescription} from "../../const/tests.js";


Enzyme.configure({
  adapter: new Adapter(),
});


const {id, title, preview, videoPreviewSrc} = shortMovieDescription;


describe(`SmallMovieCard e2e`, () => {
  it(`Should change state on mouseEnter and mouseLeave`, () => {
    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          title={title}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={false}
          onCardTitleClick={() => {}}
        />
    );

    wrapper.simulate(`mouseenter`);
    expect(wrapper.state(`isActive`)).toBe(true);

    wrapper.simulate(`mouseleave`);
    expect(wrapper.state(`isActive`)).toBe(false);
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
          onCardTitleClick={onCardTitleClick}
          onCardMouseEnter={() => {}}
          onCardMouseLeave={() => {}}
        />
    );

    const movieCardTitle = wrapper.find(`.small-movie-card__link`);

    movieCardTitle.simulate(`click`);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
