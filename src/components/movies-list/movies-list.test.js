import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";
import {Router} from "react-router-dom";
import history from "../../history.js";


const movies = fullMoviesDescriptions;

describe(`<MoviesList />`, () => {
  it(`Should MoviesList render correctly`, () => {
    const tree = renderer
      .create((
        <Router
          history={history}
        >
          <MoviesList
            movies={movies}
          />
        </Router>
      ), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
