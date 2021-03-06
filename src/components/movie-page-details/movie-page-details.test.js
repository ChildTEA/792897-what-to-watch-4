import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {fullMoviesDescriptions} from "../../const/tests.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const movies = fullMoviesDescriptions;
const authorized = AuthorizationStatus.AUTH;
const unauthorized = AuthorizationStatus.NO_AUTH;
const movieID = fullMoviesDescriptions[0].id;

describe(`<MoviePageDetails />`, () => {
  it(`Should MoviePageDetails render correctly`, () => {
    const tree = renderer
      .create((
        <Router
          history={history}
        >
          <MoviePageDetails
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
          <MoviePageDetails
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
