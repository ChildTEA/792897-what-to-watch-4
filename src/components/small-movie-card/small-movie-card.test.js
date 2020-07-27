import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {fullMovieDescription} from "../../const/tests.js";
import {Router} from "react-router-dom";
import history from "../../history.js";


const {name} = fullMovieDescription;
const children = <video className="children-component" />;

describe(`<SmallMovieCard />`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const tree = renderer
      .create((
        <Router
          history={history}
        >
          <SmallMovieCard
            name={name}
            onActivation={() => {}}
            onDeactivation={() => {}}
          >
            {children}
          </SmallMovieCard>
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
