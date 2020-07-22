import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {fullMovieDescription} from "../../const/tests.js";


const movie = fullMovieDescription;
const authorized = AuthorizationStatus.AUTH;
const unauthorized = AuthorizationStatus.NO_AUTH;


describe(`<MoviePageDetails />`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<MoviePageDetails
        authorizationStatus={authorized}
        movie={movie}
        onLogoClick={() => {}}
        onSignInClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<MoviePageDetails
        authorizationStatus={unauthorized}
        movie={movie}
        onLogoClick={() => {}}
        onSignInClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
