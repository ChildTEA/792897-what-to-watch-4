import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";


const movies = [
  {
    title: `Title. Part 1`,
    smallCardPreview: `aviator.jpg`,
  },
  {
    title: `Title. Part 2`,
    smallCardPreview: `aviator.jpg`,
  },
  {
    title: `Title. Part 3`,
    smallCardPreview: `aviator.jpg`,
  },
  {
    title: `Title. Part 4`,
    smallCardPreview: `aviator.jpg`,
  },
];


describe(`<MoviesList />`, () => {
  it(`Should MoviesList render correctly`, () => {
    const tree = renderer
      .create(
          <MoviesList
            movies={movies}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
