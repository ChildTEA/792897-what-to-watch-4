import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";
import {fullMoviesDescription} from "../../const/tests.js";


const movie = fullMoviesDescription;


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
