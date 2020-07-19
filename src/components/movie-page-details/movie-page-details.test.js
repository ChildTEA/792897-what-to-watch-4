import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";
import {fullMovieDescription} from "../../const/tests.js";


const movie = fullMovieDescription;


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
