import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';


const FILM_TITLE = `Shukan Pokemon hosokyoky`;

const onCardTitleClick = () => {};


describe(`<SmallMovieCard />`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const tree = renderer
      .create(<SmallMovieCard
        filmTitle={FILM_TITLE}
        onCardTitleClick={onCardTitleClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
