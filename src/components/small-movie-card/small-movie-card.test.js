import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {fullMovieDescription} from "../../const/tests.js";


const {id, name} = fullMovieDescription;
const children = <video className="children-component" />;

describe(`<SmallMovieCard />`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const tree = renderer
      .create((
        <SmallMovieCard
          id={id}
          name={name}
          onActivation={() => {}}
          onDeactivation={() => {}}
          onCardClick={() => {}}
        >
          {children}
        </SmallMovieCard>), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
