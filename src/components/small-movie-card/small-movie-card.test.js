import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {shortMovieDescription} from "../../const/tests.js";


const {id, title, preview} = shortMovieDescription;

const onCardTitleClick = () => {};


describe(`<SmallMovieCard />`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const tree = renderer
      .create(<SmallMovieCard
        id={id}
        title={title}
        preview={preview}
        onCardTitleClick={onCardTitleClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
