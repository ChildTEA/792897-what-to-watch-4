import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";


describe(`<MoviesList />`, () => {
  it(`Should MoviesList render correctly`, () => {
    const tree = renderer
      .create(
          <MoviesList
            movies={fullMoviesDescriptions}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
