import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";


const movie = {
  id: `0001`,
  title: `Awesome title`,
  director: `Awesome dude`,
  genre: `Magic tutorial`,
  poster: `awesome-preview.jpg`,
  runTime: `1h 00m`,
  release: `2081`,
  starring: [`Aragorn`, `Frodo Beggins`, `Gendalf A. Gray`],
};


describe(`<MoviePageDetails />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<MoviePageDetails
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
