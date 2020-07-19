import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";


const movies = fullMoviesDescriptions;

describe(`<MoviesList />`, () => {
  it(`Should MoviesList render correctly`, () => {
    const tree = renderer
      .create((
        <MoviesList
          movies={movies}
          onCardClick={() => {}}
        />
      ), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
