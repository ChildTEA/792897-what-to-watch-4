import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';


const FILM_TITLE = `Shukan Pokemon hosokyoky`;

const onCardTitleClick = () => {};


describe(`<MovieCard />`, () => {
  it(`Should MovieCard render correctly`, () => {
    const tree = renderer
      .create(<MovieCard
        filmTitle={FILM_TITLE}
        onCardTitleClick={onCardTitleClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
