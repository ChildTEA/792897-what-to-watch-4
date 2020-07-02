import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

const filterTypes = [`All`, `Comedy`, `Horror`, `18+`];

describe(`<GenresList />`, () => {
  it(`Should GenresList render correctcly`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeFilter={filterTypes[0]}
            filterTypes={filterTypes}
            onFilterItemClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
