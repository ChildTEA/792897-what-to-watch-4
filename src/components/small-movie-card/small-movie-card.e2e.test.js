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
  it(`Should run mouseenter and mouseleave callbacks`, () => {
    const onCardMouseEnter = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          title={title}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={false}
          onCardTitleClick={() => {}}
          onCardMouseEnter={onCardMouseEnter}
          onCardMouseLeave={() => {}}
        />
    );

    wrapper.simulate(`mouseenter`);

    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`Should run mouseenter and mouseleave callbacks`, () => {
    const onCardMouseLeave = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          id={id}
          title={title}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={false}
          onCardTitleClick={() => {}}
          onCardMouseEnter={() => {}}
          onCardMouseLeave={onCardMouseLeave}
        />
    );

    wrapper.simulate(`mouseleave`);

    expect(onCardMouseLeave).toHaveBeenCalledTimes(1);
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
