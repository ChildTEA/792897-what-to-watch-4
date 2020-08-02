import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {fullMoviesDescriptions} from "../../const/tests.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const movies = fullMoviesDescriptions;
const authorized = AuthorizationStatus.AUTH;
const unauthorized = AuthorizationStatus.NO_AUTH;
const movieID = fullMoviesDescriptions[0].id;


describe(`<MoviePage />`, () => {
  it(`Should MoviePage render correctly`, () => {
    const tree = renderer
      .create((
        <Router
          history={history}
        >
          <MoviePage
            addToFavorites={() => {}}
            authorizationStatus={authorized}
            movies={movies}
            movieID={movieID}
            onCardClick={() => {}}
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

  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create((
        <Router
          history={history}
        >
          <MoviePage
            addToFavorites={() => {}}
            authorizationStatus={unauthorized}
            movies={movies}
            movieID={movieID}
            onCardClick={() => {}}
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
