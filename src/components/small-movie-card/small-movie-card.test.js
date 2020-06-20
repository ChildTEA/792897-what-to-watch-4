import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";


const MOVIE = {
  title: `Title. Part 1`,
  smallCardPreview: `aviator.jpg`,
};

const onCardTitleClick = () => {};


describe(`<SmallMovieCard />`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const movieTitle = MOVIE.title;
    const cardPreview = MOVIE.smallCardPreview;

    const tree = renderer
      .create(<SmallMovieCard
        title={movieTitle}
        preview={cardPreview}
        onCardTitleClick={onCardTitleClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
