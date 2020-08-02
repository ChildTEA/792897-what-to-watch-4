import React from "react";
import renderer from "react-test-renderer";
import MoviePageReviews from "./movie-page-reviews.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {fullMoviesDescriptions} from "../../const/tests.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const movies = fullMoviesDescriptions;
const authorized = AuthorizationStatus.AUTH;
const unauthorized = AuthorizationStatus.NO_AUTH;
const movieID = fullMoviesDescriptions[0].id;

describe(`<MoviePageReviews />`, () => {
  it(`Should MoviePageReviews render correctly`, () => {
    const tree = renderer
      .create((
        <Router
          history={history}
        >
          <MoviePageReviews
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

  it(`Should MoviePageReviews render correctly`, () => {
    const tree = renderer
      .create((
        <Router
          history={history}
        >
          <MoviePageReviews
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
