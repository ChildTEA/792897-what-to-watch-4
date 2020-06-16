import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const FILM_TITLE = `Shukan Pokemon hosokyoky`;

describe(`<MovieCard />`, () => {
  it(`Should MovieCard render correctly`, () => {
    const tree = renderer
      .create(<MovieCard
        filmTitle={FILM_TITLE}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
